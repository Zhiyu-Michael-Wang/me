var footerItems = null;

$(document).ready(function(){
    $.ajax({
        url: "js\\footer_item.json",
        async: false,
        success: function (data) {
            
        }
    })
})


/** footer html code
 * <div class="jumbotron" style="margin-top: 150px; margin-bottom: 0px;">
        <div class="footer-grid-container">
            <div class="footer-grid-brand">
                <img src="pics\mySign.png" , alt="Zhiyu Wang">
            </div>

            <div class="footer-grid-title-1">
                <h5>About</h5>
            </div>
            <div class="footer-grid-title-2">
                <h5>Discover</h5>
            </div>
            <div class="footer-grid-title-3">
                <h5>Contact</h5>
            </div>

            <div class="footer-grid-link-1"><a href="article.html">Introduction</a></div>
            <div class="footer-grid-link-2"><a href="gallery.html">Blog</a></div>
            <div class="footer-grid-link-3"><p style="color: rgb(60, 60, 60);" >Email: wzy66618@outlook.com</p></div>
            <div class="footer-grid-link-4"><a href="article.html">My goals</a></div>
            <div class="footer-grid-link-5"><a href="gallery.html">Community</a></div>
            <div class="footer-grid-link-6"><p style="color: rgb(60, 60, 60);" >Ins: wangmichael327</p></div>
            <div class="footer-grid-link-7"><a href="article.html">My achievements</a></div>
            <div class="footer-grid-link-8"><a href="gallery.html">Gallery</a></div>
            <div class="footer-grid-link-9"><p style="color: rgb(60, 60, 60);" >WeChat: q2682186632</p></div>

        </div>
    </div>
 */