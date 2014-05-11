var search_data = {
    'index': {
        'searchIndex': ["virtualfilesystem","virtualfilesystem\\structure","virtualfilesystem\\wrapper","virtualfilesystem\\container","virtualfilesystem\\factory","virtualfilesystem\\fileexistsexception","virtualfilesystem\\filesystem","virtualfilesystem\\notfoundexception","virtualfilesystem\\structure\\directory","virtualfilesystem\\structure\\file","virtualfilesystem\\structure\\node","virtualfilesystem\\structure\\root","virtualfilesystem\\wrapper","virtualfilesystem\\wrapper\\directoryhandler","virtualfilesystem\\wrapper\\filehandler","virtualfilesystem\\wrapper\\permissionhelper","virtualfilesystem\\container::__construct","virtualfilesystem\\container::setfactory","virtualfilesystem\\container::factory","virtualfilesystem\\container::root","virtualfilesystem\\container::fileat","virtualfilesystem\\container::hasfileat","virtualfilesystem\\container::createdir","virtualfilesystem\\container::createfile","virtualfilesystem\\container::move","virtualfilesystem\\container::remove","virtualfilesystem\\factory::__construct","virtualfilesystem\\factory::getroot","virtualfilesystem\\factory::updatemetadata","virtualfilesystem\\factory::updatefiletimes","virtualfilesystem\\factory::getdir","virtualfilesystem\\factory::getfile","virtualfilesystem\\filesystem::__construct","virtualfilesystem\\filesystem::scheme","virtualfilesystem\\filesystem::__destruct","virtualfilesystem\\filesystem::container","virtualfilesystem\\filesystem::root","virtualfilesystem\\filesystem::path","virtualfilesystem\\filesystem::createdirectory","virtualfilesystem\\filesystem::createfile","virtualfilesystem\\structure\\directory::__construct","virtualfilesystem\\structure\\directory::adddirectory","virtualfilesystem\\structure\\directory::addfile","virtualfilesystem\\structure\\directory::size","virtualfilesystem\\structure\\directory::childat","virtualfilesystem\\structure\\directory::remove","virtualfilesystem\\structure\\directory::children","virtualfilesystem\\structure\\file::size","virtualfilesystem\\structure\\file::data","virtualfilesystem\\structure\\file::setdata","virtualfilesystem\\structure\\node::__construct","virtualfilesystem\\structure\\node::chmod","virtualfilesystem\\structure\\node::mode","virtualfilesystem\\structure\\node::chown","virtualfilesystem\\structure\\node::user","virtualfilesystem\\structure\\node::chgrp","virtualfilesystem\\structure\\node::group","virtualfilesystem\\structure\\node::size","virtualfilesystem\\structure\\node::basename","virtualfilesystem\\structure\\node::setbasename","virtualfilesystem\\structure\\node::path","virtualfilesystem\\structure\\node::url","virtualfilesystem\\structure\\node::__tostring","virtualfilesystem\\structure\\node::dirname","virtualfilesystem\\structure\\node::setaccesstime","virtualfilesystem\\structure\\node::setmodificationtime","virtualfilesystem\\structure\\node::setchangetime","virtualfilesystem\\structure\\node::atime","virtualfilesystem\\structure\\node::mtime","virtualfilesystem\\structure\\node::ctime","virtualfilesystem\\structure\\root::__construct","virtualfilesystem\\structure\\root::setscheme","virtualfilesystem\\structure\\root::path","virtualfilesystem\\structure\\root::url","virtualfilesystem\\wrapper::stripscheme","virtualfilesystem\\wrapper::getcontainerfromcontext","virtualfilesystem\\wrapper::stream_tell","virtualfilesystem\\wrapper::stream_close","virtualfilesystem\\wrapper::stream_open","virtualfilesystem\\wrapper::stream_write","virtualfilesystem\\wrapper::stream_stat","virtualfilesystem\\wrapper::url_stat","virtualfilesystem\\wrapper::stream_read","virtualfilesystem\\wrapper::stream_eof","virtualfilesystem\\wrapper::mkdir","virtualfilesystem\\wrapper::stream_metadata","virtualfilesystem\\wrapper::stream_seek","virtualfilesystem\\wrapper::stream_truncate","virtualfilesystem\\wrapper::rename","virtualfilesystem\\wrapper::unlink","virtualfilesystem\\wrapper::rmdir","virtualfilesystem\\wrapper::dir_opendir","virtualfilesystem\\wrapper::dir_closedir","virtualfilesystem\\wrapper::dir_readdir","virtualfilesystem\\wrapper::dir_rewinddir","virtualfilesystem\\wrapper\\directoryhandler::setdirectory","virtualfilesystem\\wrapper\\directoryhandler::iterator","virtualfilesystem\\wrapper\\filehandler::setfile","virtualfilesystem\\wrapper\\filehandler::write","virtualfilesystem\\wrapper\\filehandler::read","virtualfilesystem\\wrapper\\filehandler::position","virtualfilesystem\\wrapper\\filehandler::seektoend","virtualfilesystem\\wrapper\\filehandler::offsetposition","virtualfilesystem\\wrapper\\filehandler::ateof","virtualfilesystem\\wrapper\\filehandler::truncate","virtualfilesystem\\wrapper\\filehandler::setreadonlymode","virtualfilesystem\\wrapper\\filehandler::setreadwritemode","virtualfilesystem\\wrapper\\filehandler::setwriteonlymode","virtualfilesystem\\wrapper\\filehandler::isopenedforwriting","virtualfilesystem\\wrapper\\filehandler::isopenedforreading","virtualfilesystem\\wrapper\\permissionhelper::__construct","virtualfilesystem\\wrapper\\permissionhelper::userisowner","virtualfilesystem\\wrapper\\permissionhelper::usercanread","virtualfilesystem\\wrapper\\permissionhelper::usercanwrite","virtualfilesystem\\wrapper\\permissionhelper::groupisowner","virtualfilesystem\\wrapper\\permissionhelper::groupcanread","virtualfilesystem\\wrapper\\permissionhelper::groupcanwrite","virtualfilesystem\\wrapper\\permissionhelper::worldcanread","virtualfilesystem\\wrapper\\permissionhelper::worldcanwrite","virtualfilesystem\\wrapper\\permissionhelper::isreadable","virtualfilesystem\\wrapper\\permissionhelper::iswritable"],
        'info': [["VirtualFileSystem","","VirtualFileSystem.html","","",3],["VirtualFileSystem\\Structure","","VirtualFileSystem\/Structure.html","","",3],["VirtualFileSystem\\Wrapper","","VirtualFileSystem\/Wrapper.html","","",3],["Container","VirtualFileSystem","VirtualFileSystem\/Container.html","","Class to hold the filesystem structure as object representation.",1],["Factory","VirtualFileSystem","VirtualFileSystem\/Factory.html","","Factory class to encapsulate object creation.",1],["FileExistsException","VirtualFileSystem","VirtualFileSystem\/FileExistsException.html"," < Exception","Thrown when trying to override Node at address (duplicate",1],["FileSystem","VirtualFileSystem","VirtualFileSystem\/FileSystem.html","","Main 'access' class to vfs implementation.",1],["NotFoundException","VirtualFileSystem","VirtualFileSystem\/NotFoundException.html"," < Exception","Thrown when non-existing Node is requested.",1],["Directory","VirtualFileSystem\\Structure","VirtualFileSystem\/Structure\/Directory.html"," < Node","FileSystem Directory representation.",1],["File","VirtualFileSystem\\Structure","VirtualFileSystem\/Structure\/File.html"," < Node","Object representation of File.",1],["Node","VirtualFileSystem\\Structure","VirtualFileSystem\/Structure\/Node.html","","Abstract class to represent filesystem Node.",1],["Root","VirtualFileSystem\\Structure","VirtualFileSystem\/Structure\/Root.html"," < Directory","FileSystem Root representation.",1],["Wrapper","VirtualFileSystem","VirtualFileSystem\/Wrapper.html","","Stream wrapper class.",1],["DirectoryHandler","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper\/DirectoryHandler.html","","User as directory handle by streamWrapper implementation.",1],["FileHandler","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper\/FileHandler.html","","User as file handle by streamWrapper implementation.",1],["PermissionHelper","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper\/PermissionHelper.html","","",1],["Container::__construct","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method___construct","(<a href=\"VirtualFileSystem\/Factory.html\"><abbr title=\"VirtualFileSystem\\Factory\">Factory<\/abbr><\/a> $factory)","Class constructor.",2],["Container::setFactory","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_setFactory","(<a href=\"VirtualFileSystem\/Factory.html\"><abbr title=\"VirtualFileSystem\\Factory\">Factory<\/abbr><\/a> $factory)","Sets Factory instance",2],["Container::factory","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_factory","()","Returns Factory instance",2],["Container::root","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_root","()","Returns Root instance",2],["Container::fileAt","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_fileAt","(string $path)","Returns filesystem Node|Directory|File|Root at given",2],["Container::hasFileAt","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_hasFileAt","(string $path)","Checks whether filesystem has Node at given path",2],["Container::createDir","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_createDir","(string $path, bool $recursive = false, null $mode = null)","Creates Directory at given path.",2],["Container::createFile","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_createFile","(string $path, null $data = null)","Creates file at given path",2],["Container::move","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_move","(string $from, string $to)","Moves Node from source to destination",2],["Container::remove","VirtualFileSystem\\Container","VirtualFileSystem\/Container.html#method_remove","(string $path, bool $recursive = false)","Removes node at $path",2],["Factory::__construct","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method___construct","()","Class constructor.",2],["Factory::getRoot","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method_getRoot","()","Creates Root object.",2],["Factory::updateMetadata","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method_updateMetadata","(<a href=\"VirtualFileSystem\/Structure\/Node.html\"><abbr title=\"VirtualFileSystem\\Structure\\Node\">Node<\/abbr><\/a> $node)","Updates time and ownership of a node",2],["Factory::updateFileTimes","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method_updateFileTimes","(<a href=\"VirtualFileSystem\/Structure\/Node.html\"><abbr title=\"VirtualFileSystem\\Structure\\Node\">Node<\/abbr><\/a> $node)","Update file a\/c\/m times",2],["Factory::getDir","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method_getDir","(string $basename)","Creates Directory object.",2],["Factory::getFile","VirtualFileSystem\\Factory","VirtualFileSystem\/Factory.html#method_getFile","(string $basename)","Creates File object.",2],["FileSystem::__construct","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method___construct","()","Class constructor.",2],["FileSystem::scheme","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_scheme","()","Returns wrapper scheme.",2],["FileSystem::__destruct","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method___destruct","()","Remoces wrapper registered for scheme associated with",2],["FileSystem::container","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_container","()","Returns Container instance.",2],["FileSystem::root","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_root","()","Returns Root instance.",2],["FileSystem::path","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_path","(string $path)","Returns absolute path to full URI path (with scheme)",2],["FileSystem::createDirectory","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_createDirectory","(string $path, bool $recursive = false, null $mode = null)","Creates and returns a directory",2],["FileSystem::createFile","VirtualFileSystem\\FileSystem","VirtualFileSystem\/FileSystem.html#method_createFile","(string $path, string $data = null)","Creates and returns a file",2],["Directory::__construct","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method___construct","(string $basename)","Class constructor.",2],["Directory::addDirectory","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_addDirectory","(<a href=\"VirtualFileSystem\/Structure\/Directory.html\"><abbr title=\"VirtualFileSystem\\Structure\\Directory\">Directory<\/abbr><\/a> $directory)","Adds child Directory.",2],["Directory::addFile","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_addFile","(<a href=\"VirtualFileSystem\/Structure\/File.html\"><abbr title=\"VirtualFileSystem\\Structure\\File\">File<\/abbr><\/a> $file)","Adds child File.",2],["Directory::size","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_size","()","Returns Node size.",2],["Directory::childAt","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_childAt","(string $path)","Returns child Node existing at path.",2],["Directory::remove","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_remove","(string $basename)","Removes child Node",2],["Directory::children","VirtualFileSystem\\Structure\\Directory","VirtualFileSystem\/Structure\/Directory.html#method_children","()","Returns children",2],["File::size","VirtualFileSystem\\Structure\\File","VirtualFileSystem\/Structure\/File.html#method_size","()","Returns Node size.",2],["File::data","VirtualFileSystem\\Structure\\File","VirtualFileSystem\/Structure\/File.html#method_data","()","Returns contents.",2],["File::setData","VirtualFileSystem\\Structure\\File","VirtualFileSystem\/Structure\/File.html#method_setData","(<abbr title=\"VirtualFileSystem\\Structure\\$data\">$data<\/abbr> $data)","Sets contents.",2],["Node::__construct","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method___construct","(string $basename)","Class constructor.",2],["Node::chmod","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_chmod","(int $mode)","Changes access to file.",2],["Node::mode","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_mode","()","Returns file mode",2],["Node::chown","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_chown","(<abbr title=\"VirtualFileSystem\\Structure\\$userid\">$userid<\/abbr> $userid)","Changes ownership.",2],["Node::user","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_user","()","Returns ownership.",2],["Node::chgrp","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_chgrp","(<abbr title=\"VirtualFileSystem\\Structure\\$groupid\">$groupid<\/abbr> $groupid)","Changes group ownership.",2],["Node::group","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_group","()","Returns group ownership.",2],["Node::size","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_size","()","Returns Node size.",2],["Node::basename","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_basename","()","Returns Node basename.",2],["Node::setBasename","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_setBasename","(string $basename)","Sets new basename",2],["Node::path","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_path","()","Returns node path.",2],["Node::url","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_url","()","Returns node URL.",2],["Node::__toString","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method___toString","()","Returns node absolute path (without scheme).",2],["Node::dirname","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_dirname","()","Returns Node parent absolute path.",2],["Node::setAccessTime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_setAccessTime","(int $time)","Sets last access time",2],["Node::setModificationTime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_setModificationTime","(int $time)","Sets last modification time",2],["Node::setChangeTime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_setChangeTime","(int $time)","Sets last inode change time",2],["Node::atime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_atime","()","Returns last access time",2],["Node::mtime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_mtime","()","Returns last modification time",2],["Node::ctime","VirtualFileSystem\\Structure\\Node","VirtualFileSystem\/Structure\/Node.html#method_ctime","()","Returns last inode change time (chown etc.)",2],["Root::__construct","VirtualFileSystem\\Structure\\Root","VirtualFileSystem\/Structure\/Root.html#method___construct","()","Class constructor.",2],["Root::setScheme","VirtualFileSystem\\Structure\\Root","VirtualFileSystem\/Structure\/Root.html#method_setScheme","(<abbr title=\"VirtualFileSystem\\Structure\\$scheme\">$scheme<\/abbr> $scheme)","Set root scheme for use in path method.",2],["Root::path","VirtualFileSystem\\Structure\\Root","VirtualFileSystem\/Structure\/Root.html#method_path","()","Returns node path.",2],["Root::url","VirtualFileSystem\\Structure\\Root","VirtualFileSystem\/Structure\/Root.html#method_url","()","Returns node URL.",2],["Wrapper::stripScheme","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stripScheme","(string $path)","Returns path stripped of url scheme (http:\/\/, ftp:\/\/,",2],["Wrapper::getContainerFromContext","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_getContainerFromContext","(<abbr title=\"VirtualFileSystem\\$path\">$path<\/abbr> $path)","Returns Container object fished form default_context_options",2],["Wrapper::stream_tell","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_tell","()","",2],["Wrapper::stream_close","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_close","()","",2],["Wrapper::stream_open","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_open","(string $path, int $mode, int $options, string $opened_path)","Opens stream in selected mode.",2],["Wrapper::stream_write","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_write","(<abbr title=\"VirtualFileSystem\\$data\">$data<\/abbr> $data)","Writes data to stream.",2],["Wrapper::stream_stat","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_stat","()","Returns stat data for file inclusion.",2],["Wrapper::url_stat","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_url_stat","(string $path, int $flags)","Returns file stat information",2],["Wrapper::stream_read","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_read","(int $bytes)","Reads and returns $bytes amount of bytes from stream.",2],["Wrapper::stream_eof","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_eof","()","Checks whether pointer has reached EOF.",2],["Wrapper::mkdir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_mkdir","(string $path, int $mode, int $options)","Called in response to mkdir to create directory.",2],["Wrapper::stream_metadata","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_metadata","(string $path, int $option, mixed $value)","Called in response to chown\/chgrp\/touch\/chmod etc.",2],["Wrapper::stream_seek","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_seek","(int $offset, int $whence = SEEK_SET)","Sets file pointer to specified position",2],["Wrapper::stream_truncate","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_stream_truncate","(int $new_size)","Truncates file to given size",2],["Wrapper::rename","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_rename","(string $oldname, string $newname)","Renames\/Moves file",2],["Wrapper::unlink","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_unlink","(int $path)","Deletes file at given path",2],["Wrapper::rmdir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_rmdir","(string $path)","Removes directory",2],["Wrapper::dir_opendir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_dir_opendir","(string $path, int $options)","Opens directory for iteration",2],["Wrapper::dir_closedir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_dir_closedir","()","Closes opened dir",2],["Wrapper::dir_readdir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_dir_readdir","()","Returns next file url in directory",2],["Wrapper::dir_rewinddir","VirtualFileSystem\\Wrapper","VirtualFileSystem\/Wrapper.html#method_dir_rewinddir","()","Resets directory iterator",2],["DirectoryHandler::setDirectory","VirtualFileSystem\\Wrapper\\DirectoryHandler","VirtualFileSystem\/Wrapper\/DirectoryHandler.html#method_setDirectory","(<a href=\"VirtualFileSystem\/Structure\/Directory.html\"><abbr title=\"VirtualFileSystem\\Structure\\Directory\">Directory<\/abbr><\/a> $directory)","Sets directory in context.",2],["DirectoryHandler::iterator","VirtualFileSystem\\Wrapper\\DirectoryHandler","VirtualFileSystem\/Wrapper\/DirectoryHandler.html#method_iterator","()","Returns children iterator",2],["FileHandler::setFile","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_setFile","(<a href=\"VirtualFileSystem\/Structure\/File.html\"><abbr title=\"VirtualFileSystem\\Structure\\File\">File<\/abbr><\/a> $file)","Sets file in context.",2],["FileHandler::write","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_write","(string $data)","Writes data to file.",2],["FileHandler::read","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_read","(int $bytes)","Will read and return $bytes bytes from file.",2],["FileHandler::position","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_position","(null $position = null)","Returns current pointer position.",2],["FileHandler::seekToEnd","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_seekToEnd","()","Moves pointer to the end of file (for append modes).",2],["FileHandler::offsetPosition","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_offsetPosition","(int $offset)","Offsets position by $offset",2],["FileHandler::atEof","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_atEof","()","Tells whether pointer is at the end of file.",2],["FileHandler::truncate","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_truncate","(int $new_size)","Removed all data from file and sets pointer to 0",2],["FileHandler::setReadOnlyMode","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_setReadOnlyMode","()","Sets handler to read only",2],["FileHandler::setReadWriteMode","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_setReadWriteMode","()","Sets handler into read\/write mode",2],["FileHandler::setWriteOnlyMode","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_setWriteOnlyMode","()","",2],["FileHandler::isOpenedForWriting","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_isOpenedForWriting","()","Checks if pointer allows writing",2],["FileHandler::isOpenedForReading","VirtualFileSystem\\Wrapper\\FileHandler","VirtualFileSystem\/Wrapper\/FileHandler.html#method_isOpenedForReading","()","Checks if pointer allows reading",2],["PermissionHelper::__construct","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method___construct","(<a href=\"VirtualFileSystem\/Structure\/Node.html\"><abbr title=\"VirtualFileSystem\\Structure\\Node\">Node<\/abbr><\/a> $node)","",2],["PermissionHelper::userIsOwner","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_userIsOwner","()","Checks whether user_id on file is the same as executing",2],["PermissionHelper::userCanRead","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_userCanRead","()","Checks whether file is readable for user",2],["PermissionHelper::userCanWrite","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_userCanWrite","()","Checks whether file is writable for user",2],["PermissionHelper::groupIsOwner","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_groupIsOwner","()","Checks whether group_id on file is the same as executing",2],["PermissionHelper::groupCanRead","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_groupCanRead","()","Checks whether file is readable for group",2],["PermissionHelper::groupCanWrite","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_groupCanWrite","()","Checks whether file is writable for group",2],["PermissionHelper::worldCanRead","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_worldCanRead","()","Checks whether file is readable for world",2],["PermissionHelper::worldCanWrite","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_worldCanWrite","()","Checks whether file is writable for world",2],["PermissionHelper::isReadable","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_isReadable","()","Checks whether file is readable (by user, group or",2],["PermissionHelper::isWritable","VirtualFileSystem\\Wrapper\\PermissionHelper","VirtualFileSystem\/Wrapper\/PermissionHelper.html#method_isWritable","()","Checks whether file is writable (by user, group or",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']