# Scroggle Support

I've created support pages for my game Scroggle using Github's github.io hosting.  To see the actual live (minified) site, goto: https://intere.github.io/scroggle-support/

## Technology Stack
* Angular 1.4.x
* Gulp (building)
* Bower (dependencies)
* SASS
* Coffee
* Bootstrap (3)

## Development:
1. Ensure you have python2 installed (and in your path)
2. `npm install`
3. `bower install`
4. `gulp serve`

## Releasing
Ensure steps 1-3 succeed for the Development section, then run the following command: `gulp`

### To update the site:
1. Checkout the gh-pages branch
2. Merge updates into gh-pages branch
3. run ``gulp`` to build the code
4. run ``cp -r dist/* ./`` to copy all of the updated / built code (it might make sense to clean out the original artifacts, perhaps I'll create a script to do that)
5. Add / Commit / Push all of the updates
6. Profit! (okay, not really).

#### Testing `dist` locally
After completing step 4 of the prior `To update the site` instructions, you can use Python to test it locally:

**Python3:**
```bash
python3 -m http.server 8000
```

**Python:**
```bash
python -m SimpleHTTPServer 8000
```

After running the appropriate `python` command (from above), you can point your browser to `http://localhost:8000` and see the site (as was generated as a distribution from the `gulp` command)

## Screenshots

![Screenshot 1](https://raw.githubusercontent.com/intere/scroggle-support/master/screenshots/Screenshot1.png)
![Screenshot 2](https://raw.githubusercontent.com/intere/scroggle-support/master/screenshots/Screenshot2.png)
![Screenshot 3](https://raw.githubusercontent.com/intere/scroggle-support/master/screenshots/Screenshot3.png)
![Screenshot 4](https://raw.githubusercontent.com/intere/scroggle-support/master/screenshots/Screenshot4.png)

## Tools
- [Privacy Policy](https://termsfeed.com/download/free?agreement_type=PP&token=f445198c880432634bf5402515e0dae1)
    - [Permalink](https://termsfeed.com/privacy-policy/f445198c880432634bf5402515e0dae1)
