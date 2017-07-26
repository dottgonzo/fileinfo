
interface Iinfo {
    path: string
    fullname: string
    name: string
    extension: string
    dir: string
    extensionFamily: string
    extensionType: string

}

export function filenameinfo(file: string): Iinfo {

    const info = <Iinfo>{ path: file }
    info.fullname = file.split('/')[file.split('/').length - 1]
    info.dir = file.split('/' + info.fullname)[0]
    info.extension = info.fullname.split('.')[info.fullname.split('.').length - 1]
    info.name = info.fullname.split('.' + info.extension)[info.fullname.split('.' + info.extension).length - 2]


    switch (info.extension) {

        case "mp4":
            info.extensionFamily = 'video'
            info.extensionType = 'mpeg4'

            break
        case "flv":
            info.extensionFamily = 'video'
            info.extensionType = 'mpeg4'

            break
        case "avi":
            info.extensionFamily = 'video'
            info.extensionType = 'unknown'

            break
        case "webm":
            info.extensionFamily = 'video'
            info.extensionType = 'webmin'

            break
        case "mkv":
            info.extensionFamily = 'video'
            info.extensionType = 'matrioska'

            break
        case "mp3":
            info.extensionFamily = 'audio'
            info.extensionType = 'mpeg3'

            break
        case "mpa":
            info.extensionFamily = 'audio'
            info.extensionType = 'mpeg4audio'

            break
        case "aac":
            info.extensionFamily = 'audio'
            info.extensionType = 'mpeg4audio'

            break
        case "ogg":
            info.extensionFamily = 'audio'
            info.extensionType = 'unknown'

            break
        case "flac":
            info.extensionFamily = 'audio'
            info.extensionType = 'unknown'

            break
        case "js":
            info.extensionFamily = 'sources'
            info.extensionType = 'javascript'
            break
        default:
            info.extensionFamily = 'unknown'

            info.extensionType = 'unknown'
            break
    }




    return info

}