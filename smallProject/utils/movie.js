
function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var item = subjects[i];
    this.processSubject(item)
  }
}

function processSubject(subject) {
  var title = subject.title;
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + " / ";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }

  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + " / ";
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }

  var genres = subject.genres;
  var genreStr = "";
  for (var index in genres) {
    genreStr = genreStr + genres[index] + " / ";
  }
  if (genreStr != "") {
    genreStr = genreStr.substring(0, genreStr.length - 2);
  }

  var year = subject.year;
  var text = "名称: " + title + "\n导演: " + directorStr + "\n主演: " + castStr + "\n类型: " + genreStr + "\n上映年份: " + year + "年";
  subject.text = text;
}
// 这里是模块化数据
// 左边是本工具类里面的方法, value 为对外开放的接口的名字
module.exports = {
  processSubject: processSubject,
  processSubjects: processSubjects
}