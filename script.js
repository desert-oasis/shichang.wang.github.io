function filterSelection(category) {
    var items = document.getElementsByClassName("pub-item");
    var tags = document.getElementsByClassName("filter-item");

    // 更新标签的高亮状态
    for (var i = 0; i < tags.length; i++) {
        tags[i].classList.remove("active");
        if (tags[i].innerText.toLowerCase() === category.toLowerCase() || 
           (category === 'all' && tags[i].innerText === 'All')) {
            tags[i].classList.add("active");
        }
    }

    // 筛选内容
    for (var i = 0; i < items.length; i++) {
        if (category === "all") {
            items[i].classList.remove("hide");
        } else {
            if (items[i].classList.contains(category)) {
                items[i].classList.remove("hide");
            } else {
                items[i].classList.add("hide");
            }
        }
    }
}