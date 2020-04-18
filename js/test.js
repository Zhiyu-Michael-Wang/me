var dataArea = $('#data-area')
        console.log(dataArea)

        $.ajax({
            // url: 'http://jsonplaceholder.typicode.com/posts',
            url: 'js\\gallery_item.json',
            success: function (data) {
                var galleryItems = data;
                console.log(galleryItems)
    
                var gridItemTarget = $('#grid-section')
    
                for (ii = 0; ii < galleryItems.length; ii++) {
                    var it = galleryItems[ii]
                    
                    var grid_id = it.id
                    var grid_type = it.type
                    var grid_items = it.items
    
                    var renderGrid = '<div class="' + grid_type + '">'
                    for (jj = 0; jj < grid_items.length; jj++) {
                        var item = grid_items[jj]
                        var item_id = item.id
                        var item_type = item.type
                        var item_subtype = item.subtype
                        var item_img = item.img
                        var item_content = item.content
    
                        var renderPicture = 
                        '<picture onclick="popBox(\'' + item_id + '\')">' + 
                            '<source srcset="' + item_img.xs + '"media="(max-width: 420px)">' +
                            '<source srcset="' + item_img.s + '"media="(max-width: 920px)">' +
                            '<source srcset="' + item_img.m + '"media="(max-width: 1200px)">' +
                            '<img srcset="' + item_img.lg + '"class="' + item_subtype + '">' +
                        '</picture>'
    
                        var renderPopbox = 
                        '<div id="popBox-' + item_id + '"class="popBox" onclick="closeBox(\'' + item_id + '\')">' +                            
                            '<div class="popBox-content">' +
                                '<img src="' + item_content.img + '">' +
                                '<h4> ' + item_content.title + '</h4>' +
                                '<p>' + 
                                    item_content.text + 
                                    '<a href="' + item_content.link + '" class="popBox-extend-content">-learn more-</a>' +
                                '</p>' +                    
                            '</div>' +                
                        '</div>'
    
                        var renderItem = 
                        '<div class="' + item_type + '">' + 
                            renderPicture +
                            renderPopbox +
                        '</div>'
    
                        renderGrid += renderItem
                    }
                    renderGrid += '</div>'
                    
                    gridItemTarget.append(renderGrid)
                }
            }
        })
