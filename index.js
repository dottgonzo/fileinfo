"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filenameinfo(file) {
    var info = { path: file };
    info.fullname = file.split('/')[file.split('/').length - 1];
    info.dir = file.split('/' + info.fullname)[0];
    info.extension = info.fullname.split('.')[info.fullname.split('.').length - 1];
    info.name = info.fullname.split('.' + info.extension)[info.fullname.split('.' + info.extension).length - 2];
    return info;
}
exports.filenameinfo = filenameinfo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0Esc0JBQTZCLElBQVk7SUFFckMsSUFBTSxJQUFJLEdBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMzRyxNQUFNLENBQUMsSUFBSSxDQUFBO0FBRWYsQ0FBQztBQVRELG9DQVNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnRlcmZhY2UgSWluZm8ge1xuICAgIHBhdGg6IHN0cmluZ1xuICAgIGZ1bGxuYW1lOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBleHRlbnNpb246IHN0cmluZ1xuICAgIGRpcjogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlbmFtZWluZm8oZmlsZTogc3RyaW5nKTogSWluZm8ge1xuXG4gICAgY29uc3QgaW5mbyA9IDxJaW5mbz57IHBhdGg6IGZpbGUgfVxuICAgIGluZm8uZnVsbG5hbWUgPSBmaWxlLnNwbGl0KCcvJylbZmlsZS5zcGxpdCgnLycpLmxlbmd0aCAtIDFdXG4gICAgaW5mby5kaXIgPSBmaWxlLnNwbGl0KCcvJyArIGluZm8uZnVsbG5hbWUpWzBdXG4gICAgaW5mby5leHRlbnNpb24gPSBpbmZvLmZ1bGxuYW1lLnNwbGl0KCcuJylbaW5mby5mdWxsbmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdXG4gICAgaW5mby5uYW1lID0gaW5mby5mdWxsbmFtZS5zcGxpdCgnLicgKyBpbmZvLmV4dGVuc2lvbilbaW5mby5mdWxsbmFtZS5zcGxpdCgnLicgKyBpbmZvLmV4dGVuc2lvbikubGVuZ3RoIC0gMl1cbiAgICByZXR1cm4gaW5mb1xuXG59Il19
