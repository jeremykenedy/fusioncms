<?php


namespace Fusion\Jobs\Uninstaller;

use File;

class DeleteModuleAssets
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path('assets/modules');

        File::deleteDirectory($path);
    }
}
