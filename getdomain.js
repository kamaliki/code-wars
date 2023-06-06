//i hace a url either http or https and i want to get the domain name from it

function getDomain(url) {
    return url.replace(/(http|https):\/\/(www.)?/, "").split(".")[0];
}