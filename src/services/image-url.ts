// use to resize image
// so that we don't get quite large image for our small game card.

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}; //在url里面加crop/600/400可以把图片尺寸缩小、像素也跟着减小，这是我们要的。

export default getCroppedImageUrl;
