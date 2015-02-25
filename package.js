Package.describe({
  name: "gwendall:accounts-angellist",
  summary: "Login service for AngelList accounts",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-accounts-angellist.git"
});

Package.onUse(function(api) {

  api.use("accounts-base", ["client", "server"]);
  api.imply("accounts-base", ["client", "server"]);
  api.use("accounts-oauth", ["client", "server"]);

  api.use("oauth", ["client", "server"]);
  api.use("oauth2", ["client", "server"]);
  api.use("http", ["server"]);
  api.use("underscore", "server");
  api.use("templating", "client");
  api.use("random", "client");
  api.use("service-configuration", ["client", "server"]);

  api.addFiles("lib/accounts.js");
  api.addFiles("lib/client.js", "client");
  api.addFiles("lib/server.js", "server");

});
