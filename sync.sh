#!/bin/bash

# Diretório temporário para clonar os repositórios
SYNC_DIR="/tmp/storybook-sync"

# Lista de repositórios dos colaboradores
REPOS=(
    "git@github.com:andremadu/colaborador1-components.git"
    "git@github.com:andremadu/colaborador2-components.git"
)

# Apagar diretório antigo e recriá-lo
rm -rf $SYNC_DIR
mkdir -p $SYNC_DIR

# Definir chave SSH antes de clonar
export GIT_SSH_COMMAND="ssh -i ~/.ssh/storybook1 -o IdentitiesOnly=yes"

# Loop por cada repositório e copiar ficheiros
for REPO in "${REPOS[@]}"; do
    REPO_NAME=$(basename $REPO .git)
    git clone $REPO $SYNC_DIR/$REPO_NAME
    cp -r $SYNC_DIR/$REPO_NAME/componentes/* ./componentes/
done

# Commit e push das alterações no Storybook
git add .
git commit -m "Sync automático de componentes"
git push origin main
