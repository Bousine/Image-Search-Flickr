import Flickr from 'flickr-sdk'
const flickr = new Flickr("20e8c3f4b74b89f9aa13fd16ea5fa423")

export const searchPhotos = async (query) => {
    const photos = flickr.photos.search({
        text: query,
        safe_search: 3,
        page: 1,
        per_page: 25
    }).then(data => data.body.photos)
    
    return photos

}
