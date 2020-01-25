# 増し増し

This is the landing page of **Creativemashimashi Design Studio**.

Check it out: [増し増し](http://www.creativemashimashi.com)

## Tech stack

- Html/Css
- AMP

## How to check the page locally

It's a static AMP page, so you can just open `index.html`.

## Test in staging
You can utilize `gh-pages` branch for staging change.
After making commits and push to `gh-pages` branch, you can access the website with:
https://pptang.github.io/creativemashimashi/www/

## Deploy automatically
Every merge to `master` branch will trigger the CI/CD and deploy to production.

Website url: http://www.creativemashimashi.com/


## How to deploy manually

Run

```bash
gcloud app deploy
```

Refer to [this page](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website) if you encounter any problem.
