function FindProxyForURL(url, host) {
    // 1. 需要走代理的网站
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        shExpMatch(host, "*.twitter.com") ||
        shExpMatch(host, "*.x.com") ||
        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.instagram.com") ||
        shExpMatch(host, "*.wikipedia.org") ||
        shExpMatch(host, "*.github.com") ||
        shExpMatch(host, "*.githubusercontent.com") ||
        shExpMatch(host, "*.telegram.org") ||
        shExpMatch(host, "*.whatsapp.com") ||
        shExpMatch(host, "*.stackoverflow.com") ||
        shExpMatch(host, "*.gitlab.com") ||
        shExpMatch(host, "*.reddit.com") ||
        shExpMatch(host, "*.cloudflare.com") ||
        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.claude.ai") ||
        shExpMatch(host, "*.midjourney.com") ||
        shExpMatch(host, "*.pixiv.net") ||
        shExpMatch(host, "*.archive.org") ||
        shExpMatch(host, "*.v2ex.com")) {
        return "PROXY 192.168.3.3:7890";
    }

    // 2. 所有其他网站，直接连接
    return "DIRECT";
}
