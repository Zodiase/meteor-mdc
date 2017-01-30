#!/bin/bash

set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../" && pwd )"
MDC_COMPONENT_DIR="${ROOT_DIR}/node_modules/@material"
MDC_WEB_DIR="${ROOT_DIR}/node_modules/material-components-web"
MDC_METEOR_SASS_DIR="${ROOT_DIR}/meteor-packages/mdc-sass"
MDC_METEOR_PKG_FILE="${MDC_METEOR_SASS_DIR}/package.js"

# In case you need a line breaker.
BR=$'\n'

# Comma-Separator.
CS=','

# Stores all SASS files, separated by commas.
sassFiles=""

# Helper function to add a SASS file to the list.
# $1 is the target file name, relative to the `meteor-packages/mdc-sass` folder.
addSassFile () {
  if [ ! -z "${sassFiles}" ]; then
    sassFiles="${sassFiles}${CS}"
  fi
  sassFiles="${sassFiles}\"${1}\""
}

# Helper function to process a SASS file so it has the right paths.
# $1 is the target file name, relative to the `meteor-packages/mdc-sass` folder.
processSassFile () {
  sed -i '' "s|@material|{zodiase:mdc-sass}|g" "${MDC_METEOR_SASS_DIR}/${1}"
}

echo "Copying bundle file..."

# Copy the bundle SASS file over.
cp "${MDC_WEB_DIR}/material-components-web.scss" "${MDC_METEOR_SASS_DIR}/bundle.scss"
processSassFile "./bundle.scss"
addSassFile "./bundle.scss"

echo ""

echo "Copying component files..."

# For each folder in the npm package `@material`, copy all SASS files in it over.
for filePath in `cd "${MDC_COMPONENT_DIR}" && find . -name '*.scss'`
do
  echo $filePath
  fullSourceFilePath="${MDC_COMPONENT_DIR}/${filePath}"
  fullTargetFilePath="${MDC_METEOR_SASS_DIR}/${filePath}"
  fullTargetDirPath=$(dirname "${fullTargetFilePath}")
  mkdir -p "${fullTargetDirPath}"
  cp "${fullSourceFilePath}" "${fullTargetFilePath}"

  processSassFile "${filePath}"

  # Save the file in the list.
  addSassFile "${filePath}"
done

echo ""

# Update the `package.js` file.
sed -i '' "s|\"sassFiles\": \[.*\] // Generated|\"sassFiles\": \[${sassFiles}\] // Generated|g" "${MDC_METEOR_PKG_FILE}"

echo "Updated package file:"
cat "${MDC_METEOR_PKG_FILE}"
