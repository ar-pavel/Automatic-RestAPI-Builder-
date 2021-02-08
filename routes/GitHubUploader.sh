# Make executable with chmod +x <<filename.sh>>

CURRENTDIR=${pwd}

PROJECT_PATH="/home/nullpointer/Programming/Web/API-Template/TEST_API_V1"


cd ${PROJECT_PATH}

# step 1: name of the remote repo. Enter a SINGLE WORD ..or...separate with hyphens
# echo "What name do you want to give your remote repo?"
# read REPO_NAME
REPO_NAME="REST-API-V2"

# echo "Enter a repo description: "
# read DESCRIPTION
DESCRIPTION="AUTO Generated REST API by @ar-pavel"


# echo "What is your github username?"
# read USERNAME
USERNAME="ar-pavel"
PASSWORD="19Pavel98"

echo "Uploading code base to the ${REPO_NAME}"

echo "${pwd}"



# step 5 use github API to log the user in
curl -u ${USERNAME}:${PASSWORD} https://api.github.com/user/repos -d "{\"name\": \"${REPO_NAME}\", \"description\": \"${DESCRIPTION}\"}"

#  step 6 add the remote github repo to local repo and push


git init
git add .
git commit -m "This is one of the most f*** thing, I've ever done!"

git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git
git branch -M main
git push -u origin main

git add .
git commit -m "This is one of the most f*** thing, I've ever done!"
git push

# step 7 change to your project's root directory.
# cd "$PROJECT_PATH"

echo "Done. Go to https://github.com/$USERNAME/$REPO_NAME to see." 
