const logo=require('./../img/logo-silver.png')



export default () => `
<!-- top-banner and left-side-nav will be stationary on every page to keep uniformity -->
    <div class="top-banner">

        <div class="logo">

            <img src="${logo}" class="logo">

        </div>

        <div class="company-name">

            <h1>Perfectly Imperfect Counseling</h1>

        </div>

    </div>
`