set AWS_ACCESS_KEY_ID="AKIAXHWK73O7MJKIZOPK"
set AWS_SECRET_ACCESS_KEY="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"
set AWS_BUCKET_NAME="lp-curso"
set AWS_CLOUDFRONT="E3IL2X5T7J282Y"

echo AWS_ACCESS_KEY_ID

# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy