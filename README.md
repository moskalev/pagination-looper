# Pagination looper

This script automates scraping web sites with data located on multiple pages (pagination) in the presence of dynamically client-side generated web content (where simple wget/requests (python) would not work).

# Features

The script starts by loading the login page (and giving user 60 seconds to enter credentials), then continues by looping over pages in pagination for a specific number of steps. Each page in that loop is saved to the `pages` folder.

Login page can be ignored if one is not present .

# Usage

To use the script, specify constants `pages` (number of pages in pagination), `login_form_url` (if no login required, set it to 'https://google.com' for example), `pagination_url` for the url to the pages to loop trough. Last parameter should be the page number (please see the example in the code).
