<?php


namespace Tests\Feature;

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\MatrixFactory;
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MatrixTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix   = factory(Matrix::class)->make()->toArray();
        $fieldset = factory(Fieldset::class)->create();

        $matrix['fieldset'] = $fieldset->id;

        $response = $this->json('POST', '/api/matrices', $matrix);

        $response->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_not_assign_a_matrix_as_a_parent_to_itself()
    {
        // If this test fails we'll sit here until the default 30 seconds execution
        // limit has passed due to an infinite loop being generated by assigning
        // the parent ID value to itself. Wonder if there's a better way to catch this?
        $this->actingAs($this->admin, 'api');

        $matrix = factory(Matrix::class)->create();

        $data = $matrix->toArray();
        $data['parent_id'] = $matrix->id;

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response->assertJsonValidationErrors(['parent_id']);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_permissions_can_not_create_a_matrix()
    {
        $response = $this->json('POST', '/api/matrices', [
            'name'   => 'Test',
            'handle' => 'test',
        ]);

        $response->assertStatus(401);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_an_existing_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::create();
        $matrix->description = 'This is the new matrix description';

        $this
            ->json('PATCH', '/api/matrices/' . $matrix->id, $matrix->toArray())
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function matrix_name_labels_can_be_customized()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::create();
        $matrix->name_label = 'Custom Title';

        $this
            ->json('PATCH', '/api/matrices/' . $matrix->id, $matrix->toArray())
            ->assertStatus(200);

        $this->assertDatabaseHas('matrices', [
            'id'         => $matrix->id,
            'name_label' => $matrix->name_label,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function autogenerated_matrix_titles_can_be_customized()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::create();
        $matrix->show_name_field = false;
        $matrix->name_format     = '{id}-{name}';

        $this
            ->json('PATCH', '/api/matrices/' . $matrix->id, $matrix->toArray())
            ->assertStatus(200);

        $this->assertDatabaseHas('matrices', [
            'id'              => $matrix->id,
            'show_name_field' => $matrix->show_name_field,
            'name_format'     => $matrix->name_format,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_matrix_can_autogenerate_titles_and_slugs()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::asCollection()->create();

        $data                     = $matrix->toArray();
        $data['show_name_field'] = false;
        $data['name_format']     = "{id} {created_at->format('Y')}";

        $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response = $this->json('POST', '/api/collections/'.$matrix->slug, [
            'status' => true,
        ]);

        $response->assertStatus(201);

        $id    = $response->getData()->data->entry->id;
        $entry = matrix_entries($matrix->handle)->find($id);

        $name = $entry->id.' '.$entry->created_at->format('Y');
        $slug = Str::slug($name);

        $this->assertDatabaseHas($matrix->table, [
            'name' => $name,
            'slug' => $slug,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function each_matrices_must_have_a_unique_slug_and_handle()
    {
        $this->actingAs($this->admin, 'api');

        // mimic an insert w/ duplicate data..
        $matrix = factory(Matrix::class)->create();
        $matrix['id'] = null;

        $this
            ->json('POST', '/api/matrices', $matrix->toArray())
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug', 'handle']);
    }

    /**
     * @test
     * @group feature
     * @group validation
     * @group matrix
     */
    public function matrix_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('POST', '/api/forms', [ 'handle' => 'default' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/forms', [ 'handle' => 'for' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);

        $this
            ->json('POST', '/api/forms', [ 'handle' => 'true' ])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.'
            ]);
    }
}
