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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBYUEsc0JBQTZCLElBQVk7SUFFckMsSUFBTSxJQUFJLEdBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUczRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUVyQixLQUFLLEtBQUs7WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtZQUU5QixLQUFLLENBQUE7UUFFVCxLQUFLLE1BQU07WUFDUCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFBO1lBRTFDLEtBQUssQ0FBQTtRQUdULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFBO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssTUFBTTtZQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFBO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFBO1lBRS9CLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFBO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1lBRTlCLEtBQUssQ0FBQTtRQUNULEtBQUssTUFBTTtZQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFBO1lBRS9CLEtBQUssQ0FBQTtRQUNULEtBQUssSUFBSTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFBO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFBO1lBRWhDLEtBQUssQ0FBQTtRQUNUO1lBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUE7WUFFaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUE7WUFDOUIsS0FBSyxDQUFBO0lBQ2IsQ0FBQztJQUtELE1BQU0sQ0FBQyxJQUFJLENBQUE7QUFFZixDQUFDO0FBbEdELG9DQWtHQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIElpbmZvIHtcbiAgICBwYXRoOiBzdHJpbmdcbiAgICBmdWxsbmFtZTogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZXh0ZW5zaW9uOiBzdHJpbmdcbiAgICBkaXI6IHN0cmluZ1xuICAgIGV4dGVuc2lvbkZhbWlseTogc3RyaW5nXG4gICAgZXh0ZW5zaW9uVHlwZTogc3RyaW5nXG4gICAgY29udGVudFR5cGU6IHN0cmluZ1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlbmFtZWluZm8oZmlsZTogc3RyaW5nKTogSWluZm8ge1xuXG4gICAgY29uc3QgaW5mbyA9IDxJaW5mbz57IHBhdGg6IGZpbGUgfVxuICAgIGluZm8uZnVsbG5hbWUgPSBmaWxlLnNwbGl0KCcvJylbZmlsZS5zcGxpdCgnLycpLmxlbmd0aCAtIDFdXG4gICAgaW5mby5kaXIgPSBmaWxlLnNwbGl0KCcvJyArIGluZm8uZnVsbG5hbWUpWzBdXG4gICAgaW5mby5leHRlbnNpb24gPSBpbmZvLmZ1bGxuYW1lLnNwbGl0KCcuJylbaW5mby5mdWxsbmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdXG4gICAgaW5mby5uYW1lID0gaW5mby5mdWxsbmFtZS5zcGxpdCgnLicgKyBpbmZvLmV4dGVuc2lvbilbaW5mby5mdWxsbmFtZS5zcGxpdCgnLicgKyBpbmZvLmV4dGVuc2lvbikubGVuZ3RoIC0gMl1cblxuXG4gICAgc3dpdGNoIChpbmZvLmV4dGVuc2lvbikge1xuXG4gICAgICAgIGNhc2UgXCJtcDRcIjpcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uRmFtaWx5ID0gJ3ZpZGVvJ1xuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ21wZWc0J1xuICAgICAgICAgICAgaW5mby5jb250ZW50VHlwZSA9ICd2aWRlby9tcDQnXG5cbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSBcIm0zdThcIjpcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uRmFtaWx5ID0gJ3ZpZGVvJ1xuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ21wZWc0J1xuICAgICAgICAgICAgaW5mby5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LW1wZWdVUkwnXG5cbiAgICAgICAgICAgIGJyZWFrXG5cblxuICAgICAgICBjYXNlIFwiZmx2XCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICd2aWRlbydcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uVHlwZSA9ICdtcGVnNCdcbiAgICAgICAgICAgIGluZm8uY29udGVudFR5cGUgPSAndmlkZW8vbXA0J1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwiYXZpXCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICd2aWRlbydcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uVHlwZSA9ICd1bmtub3duJ1xuICAgICAgICAgICAgaW5mby5jb250ZW50VHlwZSA9ICd2aWRlby9hdmknXG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJ3ZWJtXCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICd2aWRlbydcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uVHlwZSA9ICd3ZWJtaW4nXG4gICAgICAgICAgICBpbmZvLmNvbnRlbnRUeXBlID0gJ3ZpZGVvL3dlYm0nXG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJta3ZcIjpcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uRmFtaWx5ID0gJ3ZpZGVvJ1xuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ21hdHJpb3NrYSdcbiAgICAgICAgICAgIGluZm8uY29udGVudFR5cGUgPSAndmlkZW8vbWt2J1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwibXAzXCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICdhdWRpbydcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uVHlwZSA9ICdtcGVnMydcbiAgICAgICAgICAgIGluZm8uY29udGVudFR5cGUgPSAnYXVkaW8vbXAzJ1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwibTRhXCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICdhdWRpbydcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uVHlwZSA9ICdtcGVnNGF1ZGlvJ1xuICAgICAgICAgICAgaW5mby5jb250ZW50VHlwZSA9ICdhdWRpby9tNGEnXG5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgXCJhYWNcIjpcbiAgICAgICAgICAgIGluZm8uZXh0ZW5zaW9uRmFtaWx5ID0gJ2F1ZGlvJ1xuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ21wZWc0YXVkaW8nXG4gICAgICAgICAgICBpbmZvLmNvbnRlbnRUeXBlID0gJ2F1ZGlvL2FhYydcblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcIm9nZ1wiOlxuICAgICAgICAgICAgaW5mby5leHRlbnNpb25GYW1pbHkgPSAnYXVkaW8nXG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvblR5cGUgPSAndW5rbm93bidcbiAgICAgICAgICAgIGluZm8uY29udGVudFR5cGUgPSAnYXVkaW8vb2dnJ1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFwiZmxhY1wiOlxuICAgICAgICAgICAgaW5mby5leHRlbnNpb25GYW1pbHkgPSAnYXVkaW8nXG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvblR5cGUgPSAndW5rbm93bidcbiAgICAgICAgICAgIGluZm8uY29udGVudFR5cGUgPSAnYXVkaW8vZmxhYydcblxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBcImpzXCI6XG4gICAgICAgICAgICBpbmZvLmV4dGVuc2lvbkZhbWlseSA9ICdzb3VyY2VzJ1xuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ2phdmFzY3JpcHQnXG4gICAgICAgICAgICBpbmZvLmNvbnRlbnRUeXBlID0gJ2RvY3VtZW50L2pzJ1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaW5mby5leHRlbnNpb25GYW1pbHkgPSAndW5rbm93bidcblxuICAgICAgICAgICAgaW5mby5leHRlbnNpb25UeXBlID0gJ3Vua25vd24nXG4gICAgICAgICAgICBicmVha1xuICAgIH1cblxuXG5cblxuICAgIHJldHVybiBpbmZvXG5cbn0iXX0=
