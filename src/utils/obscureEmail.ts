export const obscureEmail = (email: string) => {
  var parts = email.split("@");
  var name = parts[0];
  var result = name.charAt(0);
  for (var i = 1; i < name.length; i++) {
    result += "*";
  }
  result += name.charAt(name.length - 1);
  result += "@";
  var domain = parts[1];
  result += domain.charAt(0);
  var dot = domain.indexOf(".");
  for (var i = 1; i < dot; i++) {
    result += "*";
  }
  result += domain.substring(dot);

  return result;
};
