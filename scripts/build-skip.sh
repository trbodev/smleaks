if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip cd]"* ]]; then 
    exit 0; 
else 
    exit 1; 
fi