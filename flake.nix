{
  description = "NPM flake";

  inputs = {
    flake-compat.flake = false;
    flake-compat.url = github:edolstra/flake-compat;
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils, flake-compat }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell =
          pkgs.mkShell {
            buildInputs = [
              pkgs.jre
              pkgs.nodejs-16_x
            ];
          };
      });
}

