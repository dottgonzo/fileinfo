
interface Iinfo {
    path: string
    fullname: string
    name: string
    extension: string
    dir: string
}

export function filenameinfo(file: string): Iinfo {

    const info = <Iinfo>{ path: file }
    info.fullname = file.split('/')[file.split('/').length - 1]
    info.dir = file.split('/' + info.fullname)[0]
    info.extension = info.fullname.split('.')[info.fullname.split('.').length - 1]
    info.name = info.fullname.split('.' + info.extension)[info.fullname.split('.' + info.extension).length - 2]
    return info

}