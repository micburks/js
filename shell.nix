{ pkgs ? import (fetchTarball "http://nixos.org/channels/nixos-21.05/nixexprs.tar.xz") {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.yarn
    pkgs.entr
  ];

  shellHook = ''
    yarn install
  '';
}
