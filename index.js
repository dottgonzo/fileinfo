"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filenameinfo(file) {
    var info = { path: file };
    info.fullname = file.split('/')[file.split('/').length - 1];
    info.dir = file.split('/' + info.fullname)[0];
    info.extension = info.fullname.split('.')[info.fullname.split('.').length - 1];
    info.name = info.fullname.split('.' + info.extension)[info.fullname.split('.' + info.extension).length - 2];
    switch (info.extension) {
        case "mp4":
            info.extensionFamily = 'video';
            info.extensionType = 'mpeg4';
            info.contentType = 'video/mp4';
            break;
        case "m3u8":
            info.extensionFamily = 'video';
            info.extensionType = 'mpeg4';
            info.contentType = 'application/x-mpegURL';
            break;
        case "flv":
            info.extensionFamily = 'video';
            info.extensionType = 'mpeg4';
            info.contentType = 'video/mp4';
            break;
        case "avi":
            info.extensionFamily = 'video';
            info.extensionType = 'unknown';
            info.contentType = 'video/avi';
            break;
        case "webm":
            info.extensionFamily = 'video';
            info.extensionType = 'webmin';
            info.contentType = 'video/webm';
            break;
        case "mkv":
            info.extensionFamily = 'video';
            info.extensionType = 'matrioska';
            info.contentType = 'video/mkv';
            break;
        case "mp3":
            info.extensionFamily = 'audio';
            info.extensionType = 'mpeg3';
            info.contentType = 'audio/mp3';
            break;
        case "m4a":
            info.extensionFamily = 'audio';
            info.extensionType = 'mpeg4audio';
            info.contentType = 'audio/m4a';
            break;
        case "aac":
            info.extensionFamily = 'audio';
            info.extensionType = 'mpeg4audio';
            info.contentType = 'audio/aac';
            break;
        case "ogg":
            info.extensionFamily = 'audio';
            info.extensionType = 'unknown';
            info.contentType = 'audio/ogg';
            break;
        case "flac":
            info.extensionFamily = 'audio';
            info.extensionType = 'unknown';
            info.contentType = 'audio/flac';
            break;
        case "js":
            info.extensionFamily = 'sources';
            info.extensionType = 'javascript';
            info.contentType = 'document/js';
            break;
        default:
            info.extensionFamily = 'unknown';
            info.extensionType = 'unknown';
            break;
    }
    return info;
}
exports.filenameinfo = filenameinfo;
