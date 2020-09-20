# Aim of Project: Nutritious Bot

[Nutritious Bot](https://minirazs.github.io/project2_ai_nutrition/)🤖is an informative and straighforward site to find out food nutrition and related recipes.

## UX

The aim of the site is for the user to have a refreshing experience in understanding the nutritional values of a food dish and to view related recipes by introducing an _AI-powered Image Recognition API_ for an image-based search to enhance the search process, besides having a text-based search. The common ways of finding recipes online or via the apps are usually text-based searches.

## UI

![](allscreen.gif)

_Colour_

The main colours used in the site are 3 shades of green, black, and white. Green is chosen as it is closely associated with greens and vegetables, healthy food.

_Font_

Thasadith is a minimalistic, modern font that gives off a simple, clean feel.

_Wireframe_

The wireframe (.pdf) is in the [wireframe folder](https://github.com/Minirazs/project2_ai_nutrition/blob/master/wireframe/wireframe.pdf). The idea is to create a simple 1 pager with clear and enticing content to allow the user to navigate the site easily.

1. The top section of the site is denoted by the background image of healthy dishes with a focus on the accordion holding 3 search bars.
2. The middle section of the site has a plain white background to display the search results prominently.
3. The footer of the site has a link to my Github and a scroll-up button for the user to quickly get back to the top of the site to access the search bars.

## User Stories

- The user wants to find out the nutritional facts of a particular dish and receives similar recipes to make it.
- The user wants to know if the recipe recommended from each search is considered healthy or unhealthy, based on its health score.
- There may be scenarios where the user comes across a new dish when he is eating out and he takes a photograph of the dish, wanting to see if he can make something similar afterwards. In this case, the user can upload the new dish image on the site to find out its nutritional values and the recipes.
- The user can also paste an image URL of a dish he sees online to search for its nutrition and recipes.
- The user can quickly search by typing on the name of the dish if he does not want to explore the image-based searches.

## Features

- The first search bar, &#39;_Image Analyser&#39;_ that uses AI-powered Image Recognition API, makes recipe discovery easier by enabling users to search by uploading an image from their device. Currently, there are only 50 food dishes that the API can recognize.
- The second search bar, &#39;_Image URL Analyser&#39;_ that also uses an Image Recognition API, makes recipe discovery easier by enabling users to search by uploading an image URL from the web.
- The third search bar, &#39;_Search by Text&#39;_, is a text-based search process that allows the users to access to one of the widest range of recipe database in the world (350k+)
- Nutritional values of the search item will be displayed first followed by a list of recipes.
- Showing a list of similar recipes with links to an external page that contains extensive information on every recipe that includes nutritional facts, ingredients, and directions.
- Every recipe presented is assigned a health score. 100 for a perfect health score and 0 for the worst score. The higher the score is measured by how easily the dish can be made, whether the nutritional values are healthy intakes for the body, and how affordable are the ingredients.
- All the links and images – when hovered over, the links appear in dark blue. When the cursor is stopped and hovered over the object for a few seconds, text (in the title) appears to describe it.
- Scroll-up button – once clicked, the site will bring the user back to the top of the page.
- Mobile responsive – when device and screen size changes, the elements in the site change to optimize the user&#39;s viewing experience.

### _Features that can be improved / Future Plans_

- To provide demo images for the Image Analyser search bar (1st bar) and to show a preview of the image uploaded.
- The project can be expanded to improve user functionality by having user accounts, allowing every user to input personal details and track his calorie intake and nutritional intake, and save recipes.

## Technologies Used

- HTML5
- CSS3
- JavaScript, Axios
- JQuery
- [Spoonacular API](https://spoonacular.com/food-api)
  - Image recognition API – search by image
- [Bootstrap 4](https://getbootstrap.com/)
  - The project uses Bootstrap framework for basic, quick, customisable design codes and allows the site to be mobile responsive.
- [Favicon.io](https://favicon.io/favicon-converter/)
  - Favicon is created from this site.
- [Font Awesome v5.0.0](https://fontawesome.com/)
  - The chevron icon used in the scroll-up button is from Font Awesome
- [Am I Responsive?](http://ami.responsivedesign.is/)
  - To check the mobile responsiveness of the site and create screen.gif
- [Screen to Gif](https://www.screentogif.com/)
- [Minify](https://www.minifier.org/)
  - To minify the CSS code. Minified CSS is added in the CSS folder to reduce file size.
- [Copy text to clipboard code](https://codepen.io/shaikmaqsood/pen/XmydxJ? __cf_chl_jschl_tk__ =07f496607848631e96406a1c8eabcbe8bb51c153-1600493872-0-AYNF-0pEZqAbDzrJAkFFL61ko1rn_UXGqoxUuJ3Hmp5VOMCLcugHEwlDGb-XxXsxXsaDwpeEzjntnUwcAihCvGp_xhg4yAbkjXFopNxsMDGuBSgtdQEuPHHKAgbc8yjoJ18MPFC_Mt_SxQKq4XaHvUxWNGMj7NI7Wm7drEICcuRv7_WNSgbMDsuk0X8thkelg4tgrPHx48KgulcOD1Z4QHHllMCeaLRp-b8OAKAzClFWOm_rVvgGVEnd7EeI7A9ipknt6chR8IxKbGMze9X2lgf80XmsA_Pr5eYslcKGGJh-M3fcKBoTgRH9Qw_fFeeWpuz1V95x5KxYn4oAzViZUWKsi7TGgYM4MuSGO-Ris-ph)
- [Scroll-up button](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
- [Bitly](https://bitly.com/)
  - To shorten the demo URL link
- [Word to markdown converter](https://word2md.com/)
  - To convert word doc into Markdown for use in README.md
- [Google Font](https://fonts.google.com/)
  - Fonts used – Thasadith, Oswald
- [Visual Studio Code (VSC)](https://code.visualstudio.com/) and its extensions like Live Server and Prettier
- [Github](https://github.com/)
- [Adobe Creative Suite](https://www.adobe.com/sea/creativecloud.html) – UX, Photoshop
- [W3C Markup Validation service](https://validator.w3.org/)
  - Used to validate HTML codes and this result is returned &#39;No Error Found.&#39;
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - Used to validate CSS codes and this result is returned &#39;No Error Found.&#39;
- [JSHint, Code Analysis tool for Javascript](https://jshint.com/)
  - Used to validate Javascript codes and the results are ignored as they do not affect the functionality of the site: &#39;let&#39;/&#39;const&#39; is available in ES6 (use &#39;esversion: 6&#39;) or Mozilla JS extensions (use moz); &#39;template literal syntax&#39; is only available in ES6 (use &#39;esversion: 6&#39;); &#39;Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. ($, searchTerms, resultLength)&#39;

## Testing

The initial testing phase was to put the HTML code, CSS code, and Javascript code through the W3C, Jigsaw, and JSHint validator tools to check and rectify issues.

Next, using the browser&#39;s Inspect tool and Live Server extension on VSC to preview the site ensures that the site is mobile responsive and all content, such as video banner, buttons, and links, is correctly and displayed on different screen sizes, namely mobile (below 480px), tablet (between 768px to 1024px) and laptop (above 1024px):

- iPad (portrait and landscape mode)
- iPad Pro (portrait and landscape mode)
- Kindle Fire (portrait and landscape mode)
- Galaxy S9/S9+
- iPhone X/XS
- iPhone 6/7/8
- iPhone 5/SE
- Pixel 2
- Moto G4
- Surface Duo
- Galaxy Fold

These steps are repeated in the testing on three major web browsers, Chrome, IE Edge, and Firefox:

1. Manually pressing and testing external links (e.g. the title and image of each recipe card) open a new tab and lead to the correct destination.
2. The internal hyperlink leads to the correct section of the site, specifically referring to the scroll-up button and the reference to the 3rd search bar
3. Submitting requests using different images, image URLs, and dish names to test the response of the APIs and validate the results. All requests produce an output of a certain type of recipe.
  1. For the first two search bars (image analyser and URL analyser), there are only 50 food dishes for the time being that can be analysed accurately. For an image that falls out of the 50 dishes, the API will return the closest recipe.
  2. If the user is not satisfied with the results from the first 2 search bars, he can type in the 3rd search bar (search by text) that has a much larger recipe database of 350,000, and that will give a more accurate search result.

## Deployment

The project is deployed using GitHub Pages for version controlling and is found at this link: [https://github.com/Minirazs/project2\_ai\_nutrition](https://github.com/Minirazs/project2_ai_nutrition). The site is automatically updated when new commits are pushed to the master branch.

The code of the site can be run locally in your computer by either downloading this repository or cloning it from the GitHub repository. The code can be run by an integrated development environment (IDE) such as VSC.

**Download**

If you want to download the code,

1. Click on the green &#39;Code&#39; button in the link and download it as a ZIP file
2. Unzip the folder that contains files such as index.html
3. Open the folder and run in IDE like VSC

**Clone**

If you want to clone the files,

1. Click on the green &#39;Code&#39; button,
2. Copy the URL and paste it in your IDE terminal for cloning them in your computer.
3. Break the connection with this GitHub repository, by entering &#39;git remote rm origin&#39; into your terminal.

There are [several ways to clone repositories on GitHub](https://docs.github.com/en/github/using-git/which-remote-url-should-i-use).

## Credits

## Tools &amp; Tech used

### Special thanks to the [Spoonacular](https://spoonacular.com/food-api) team for creating and documenting the API well for coders to use. I am thankful for the developers and tech creators for sharing freely their code and tools that are used in this site creation. 🤗🙌 They are listed in the Technologies section above.

## Image &amp; Logo 📷

- [Background image from Pexel.com](https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260)
- [Bot Logo from Tailor Brands](https://studio.tailorbrands.com/)