This app creates a documentation website that allows documents to be retrieved from an S3 bucket where there hierarchy within the S3 bucket maps to the Header Menu items, or sidebar submenu items.

Images must be stored in an images directory within the S3 bucket and can be referenced in the markdown files with simple html 
e.g
<'img src="images/imagename.jpg">
The app will re render the images after retrieving the files from S3 through presigned urls returned by the lambda function.
There are two lambda function endpoints attached to an API gateway, one is to retrieve the list of all items in the bucket, and second is to generate presigned urls.

Clicking on header menus will take you to the index page if an index.md exists in the directory, otherwise to the first page.