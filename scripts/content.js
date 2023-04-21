var item = prompt(`What item you want to bid?`);

if (item !== null && item !== undefined && item !== "") {
    localStorage.setItem('item', item);

    var parentElement = document.getElementsByClassName("thumbnails");
    var itemsElement = parentElement[0].getElementsByTagName('li');

    if (itemsElement.length > 0) {
        var indexOfLowestBid = 0;
        var lowestBidPoints = 0;
    
        for (var i = 0; i < itemsElement.length - 1; i++) {
            var titleElement = itemsElement[i].getElementsByTagName("h5");
            var findItem = localStorage.getItem('item');
            var thisItem = titleElement[0].textContent;
            
            if (thisItem.toLocaleLowerCase().includes(findItem.toLocaleLowerCase())) {
                var captionElement = itemsElement[i].getElementsByClassName("caption");
                var bidPointsBadgeElement = captionElement[0].getElementsByTagName("center");
                var bidPointsLabelElement = bidPointsBadgeElement[0].getElementsByClassName("label-info");
                var regex = /\d+/g;
                var string = bidPointsLabelElement[0].textContent;
                var matches = string.match(regex);  // creates array from matches            
                var points = matches[0];
                
                if (lowestBidPoints == 0) {
                    lowestBidPoints = points;
                }
    
                if (points < lowestBidPoints) {
                    lowestBidPoints = points;
                    indexOfLowestBid = i;
                }
            }
        }
    
        //itemsElement[indexOfLowestBid].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        //alert("Lowest bid is " + lowestBidPoints);

        var targetCaptionElement = itemsElement[indexOfLowestBid].getElementsByClassName("caption");
        var detailsElement = targetCaptionElement[0].getElementsByTagName("a");
        detailsElement[0].click();

    }
}