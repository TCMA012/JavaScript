/*
URL
https://developer.mozilla.org/en-US/docs/Web/API/URL
https://dmitripavlutin.com/parse-url-javascript/
javascript canParse URL
javascript URLSearchParam



URL encoding, officially known as percent-encoding, is a method to 
encode arbitrary data in a 
Uniform Resource Identifier (URI) using only the limited US-ASCII characters legal within a URI. 
Although it is known as URL encoding, it is also used more generally within the main Uniform Resource Identifier (URI) set, which includes both 
Uniform Resource Locator (URL) and 
Uniform Resource Name (URN). As such, it is also used in the preparation of data of the application/x-www-form-urlencoded media type, as is often used in the submission of HTML form data in HTTP requests.
*/
const urlAbsolute = new URL('http://example.com/path/index.html');
console.log(urlAbsolute.href); // => 'http://example.com/path/index.html'

//or combine relative and absolute URLs:
const url = new URL('/path/index.html', 'http://example.com');
console.log(url.href); // => 'http://example.com/path/index.html'