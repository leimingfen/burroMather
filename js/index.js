$(function(){
  $('.holiday_title').on('tap','span',function(){
    //讓自己拥有active这类 其他兄弟元素移除这个类
   $(this).addClass('active').siblings().removeClass('active')
  //  获取自己的索引
    var index=$(this).index();
//让对应的索引的显示 其他兄弟元素隐藏
    $('.content').find('.holiday_content').eq(index).show().siblings().hide();
  })
})