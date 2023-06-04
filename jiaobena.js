
let storage = storages.create("13960317008")
let urlapi = storage.get("urlapi", "113")
let x = device.width
let y = device.height
var sayHiArr, nameArr, sendTime, sendStrip, yuYinTime
let moosgsuKL = "12654", UEKSmksaa = "344560", MISdasgsgd = storage.get("ming", "xiangQinBa");
var window日志, 主程序线程
var 头像ID

日志显示();
悬浮窗();
/**截图权限获取 ,如有图色命令需要取消此注释*/
// 
//     if (!requestScreenCapture()) {
//         alert("请求截图失败");
//         sleep(1000);
//         exit();
//     } else {
//         toast("请求截图成功");
//     }
// 





//threads.start(CDKLogin)
//标记1
storage.put("运行状态", 1)
//标记2



function 主程序() {
    fanA()
    sendTime = Number(storage.get("time", "2")) * 1000//发送时间
    sendStrip = Number(storage.get("strip", "2"))//发送条数
    yuYinTime = Number(storage.get("yuYinTime", "6")) * 1000
    nameArr = storage.get("name_guoLv", "过滤1|过滤2").split("|")
    huifu = storage.get("hui_huasu", "给我打视频吧|我们视频聊吧|咱视频聊吧").split("|")
    jiju = Number(storage.get("jiju", "3"))

    if (storage.get("视频话术模式", true)) {
        sayHiArr = storage.get("视频打招呼语", ["你好"])


    } else {
        sayHiArr = storage.get("聊天打招呼语", "你好")


    }
    console.info("主程序入口")

    //以上通用不用改=========================================================================================
    let app记录 = storage.get("app")
    let 模式 = storage.get(app记录 + "子选项", 0)
    app记录 = "知聊"
    if (app记录 == "知聊") {
        console.info("知聊 分支")
        知聊(模式)
    } else if (app记录 == "知友语聊") {
        知友语聊(模式)
    }

}
function fanA() {
   
}

function 知友语聊(模式) {
    while (true) {
        知友语聊启动app()
        if (模式 == 0) {
            知聊推荐()
        } else if (模式 == 1) {
            知聊活跃()
        } else if (模式 == 2) {
            知聊新人()
        } else if (模式 == 3) {
            知聊抢聊()
        } else if (模式 == 4) {
            知聊交友()
        } else if (模式 == 5) {
            知聊VIP()
        }
    }
}

function 知友语聊启动app() {
    if (currentPackage() == "com.yyk.zhiyou") {
        //正在运行的应用的包名
        toastLog("继续")
    } else {
        toast("知友语聊没有启动,正在尝试重新启动")
        app.launchPackage("com.yyk.zhiyou")
        sleep(5000)
        if (currentPackage() == "com.yyk.zhiyou") {
            toast("启动成功")
        } else {
            toast("启动失败,正在尝试重新启动")
            sleep(3000)
        }
    }
}
function 知聊(模式) {
    while (true) {
        知聊启动app()
        if (模式 == 0) {
            知聊推荐()
        } else if (模式 == 1) {
            知聊活跃()
        } else if (模式 == 2) {
            知聊新人()
        } else if (模式 == 3) {
            知聊抢聊()
        } else if (模式 == 4) {
            知聊交友()
        } else if (模式 == 5) {
            知聊VIP()
        }
    }
}

function 知聊启动app() {
    if (currentPackage() == "com.yyk.knowchat") {
        //正在运行的应用的包名
        toastLog("继续")
        console.info("继续");
    } else {
        console.info("知聊没有启动,正在尝试重新启动");
        toast("知聊没有启动,正在尝试重新启动")
        app.launchPackage("com.yyk.knowchat")
        sleep(5000)
        if (currentPackage() == "com.yyk.knowchat") {
            toast("启动成功")
            console.info("启动成功");
        } else {
            toast("启动失败,正在尝试重新启动")
            console.info("启动失败,正在尝试重新启动");
            sleep(3000)
        }
    }
}
function 知聊自动接听() {
    if (storage.get("zdjieting", true)) {
        var node = id("tvIncomingCallAnswer").findOnce()
        if (node) {
            node.click()
        }
    }
}
function 知聊活跃() {

    var node = id("fl_main_menu_provide").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    知聊自动接听()
    var node = text("聊场").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    node = text("活跃").findOnce()
    if (node) {
        sleep(500)
        toastLog("活跃")
        点击(node)
        sleep(1000)
    }
    node = id("ivProvideFilter").findOnce()
    if (node) {
        sleep(500)
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("男").findOne(1500) || text("小哥哥").findOnce()
    if (node) {
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("确定").findOne(1500) || text("选好了").findOnce()
    if (node) {
        点击(node)
        sleep(1000)
    }
    知聊刷新()
    sleep(2000)
    for (let i = 0; i < 9; i++) {
        var nodes = id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).find()//找到本页所有的头像
        toastLog(nodes.size())
        if (!nodes.empty()) {//如果本页头像存在
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]//循环遍历每一个头像//nodes是一个数组//node是每一个头像的节点
                if (id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()) {//如果在头像页面
                    sleep(500)
                    node.click()
                    //点击(node)//点击每次遍历的那一个头像
                    sleep(1000)
                    知聊自动接听()
                    var nodd = id("fl_provide_card_root").findOnce()
                    if (nodd) {
                        console.info("nodd.............")
                        toastLog("...")
                    } else {
                        sleep(1000)
                        知聊消息点击()
                        知聊自动接听()
                        sleep(300)
                        var node3 = id("tvHeadTitle").findOnce()//定义昵称
                        var 昵称 = ""
                        if (node3) {
                            昵称 = node3.getText() + ""//获取到昵称名字
                            log(nameArr)
                            log(昵称)
                            var ladd = 0
                            for (let i = 0; i < nameArr.length; i++) {
                                if (昵称.indexOf(nameArr[i]) > -1) {
                                    toastLog("设置了老客户不发")
                                    //exit()
                                    sleep(300)
                                    知聊返回()
                                    知聊返回()
                                    知聊返回()
                                    sleep(500)
                                    ladd = 1///相当于Goto
                                    break
                                }
                            }
                            if (ladd == 0) {
                                log("发信息3")
                                知聊发消息()
                            }
                        }

                    }

                    toastLog("一次")
                } else {
                    toastLog("异常跳出男粉下面打招呼界面")
                }
            }
            sleep(200)
            toastLog("滑动")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(500)
            if (textContains("加载完成").findOnce()) {
                sleep(1000)
                swipe(x / 2, y * 0.7, x / 2, 0, 500)
                sleep(500)
            }
            if (storage.get("jishihuif", true)) {
                知聊回信息()
            }
            知聊自动接听()
        } else {
            toastLog("没找到男粉下面打招呼图标")
        }
    }
    知聊返回()

}
function 知聊交友() {
    if (storage.get("jishihuif", true)) {
        知聊回信息()
    }
    var node = id("fl_main_menu_provide").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    置顶()
    var node = id("fl_main_menu_dynamic").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }

    知聊自动接听()
    var node = text("交友").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    node = text("全部").findOnce()
    if (node) {
        sleep(500)
        toastLog("全部")
        点击(node)
        sleep(1000)
    }
    知聊刷新()
    sleep(2000)
    for (let i = 0; i < 15; i++) {
        let cc = 0
        var nodes = id("iv_online_state_dot").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).find()//找到本页所有的头像
        toastLog(nodes.size())
        if (!nodes.empty()) {//如果本页头像存在
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]//循环遍历每一个头像//nodes是一个数组//node是每一个头像的节点
                if (id("iv_online_state_dot").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()) {//如果在头像页面
                    sleep(500)
                    点击(node)
                    node.click()
                    sleep(1000)
                    知聊自动接听()
                    var nodd = id("fl_main_menu_dynamic").findOnce()
                    if (nodd) {
                        console.info("循环遍历每一个头像 nodd.............")
                        toastLog("...")
                    } else {
                        sleep(1000)
                        知聊消息点击()
                        sleep(300)
                        var node3 = id("tvHeadTitle").findOnce()//定义昵称
                        var 昵称 = ""
                        if (node3) {
                            昵称 = node3.getText() + ""//获取到昵称名字
                            log(nameArr)
                            log(昵称)
                            var ladd = 0
                            for (let i = 0; i < nameArr.length; i++) {
                                if (昵称.indexOf(nameArr[i]) > -1) {
                                    toastLog("设置了老客户不发")
                                    //exit()
                                    sleep(300)
                                    知聊返回()
                                    知聊返回()
                                    知聊返回()
                                    sleep(500)
                                    ladd = 1///相当于Goto
                                    break
                                }
                            }
                            if (ladd == 0) {
                                log("发信息3")
                                知聊发消息()
                            }
                        }
                    }
                    知聊返回()
                    toastLog("一次")
                } else {
                    toastLog("异常跳出男粉下面打招呼界面")
                }
            }
            sleep(200)
            知聊自动接听()
            toastLog("滑动")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(500)
            if (textContains("加载完成").findOnce()) {
                sleep(1000)
                swipe(x / 2, y * 0.7, x / 2, 0, 500)
                sleep(500)
            }
            if (storage.get("jishihuif", true)) {
                知聊回信息()
                let node = id("fl_main_menu_dynamic").findOne(1000)
                if (node) {
                    sleep(500)
                    toastLog("点击首页")
                    点击(node)
                    sleep(1000)
                }
            }

        } else {
            toastLog("没找到在线的")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(300)
            知聊返回()
        }
    }
    知聊返回()

}
function 置顶() {
    let hy = text("活跃").findOnce()
    if (hy) {
        toastLog("去置顶")
        点击(hy)
        sleep(1000)
    }
    let zd = id("iv_provide_to_top").findOnce()
    if (zd) {
        zd.click()
        sleep(1000)
        toastLog("置顶成功")
    }
    let qx = text("取消").findOnce()
    if (qx) {
        qx.click()
        sleep(1000)
    }
    qx = text("我知道了").findOnce()
    if (qx) {
        qx.click()
        点击(qx)
        sleep(1000)
    }
}
function 知聊推荐() {
    if (storage.get("jishihuif", true)) {
        知聊回信息()
    }
    var node = id("fl_main_menu_provide").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    置顶()
    知聊自动接听()
    var node = text("聊场").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    node = text("推荐").findOnce()
    if (node) {
        sleep(500)
        toastLog("推荐")
        点击(node)
        sleep(1000)
    }
    node = id("ivProvideFilter").findOnce()
    if (node) {
        sleep(500)
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("男").findOne(1500) || text("小哥哥").findOnce()
    if (node) {
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("确定").findOnce() || text("选好了").findOnce()
    if (node) {
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    知聊刷新()
    sleep(2000)
    for (let i = 0; i < 15; i++) {
        var nodes = id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).find()//找到本页所有的头像
        toastLog(nodes.size())
        if (!nodes.empty()) {//如果本页头像存在
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]//循环遍历每一个头像//nodes是一个数组//node是每一个头像的节点
                if (id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()) {//如果在头像页面
                    sleep(500)
                    node.click()
                    //点击(node)//点击每次遍历的那一个头像
                    sleep(1000)
                    知聊自动接听()
                    var nodd = id("fl_provide_card_root").findOnce()
                    if (nodd) {
                        toastLog("...")
                    } else {
                        sleep(1000)
                        知聊消息点击()
                        sleep(300)
                        var node3 = id("tvHeadTitle").findOnce()//定义昵称
                        var 昵称 = ""
                        if (node3) {
                            昵称 = node3.getText() + ""//获取到昵称名字
                            log(nameArr)
                            log(昵称)
                            var ladd = 0
                            for (let i = 0; i < nameArr.length; i++) {
                                if (昵称.indexOf(nameArr[i]) > -1) {
                                    toastLog("设置了老客户不发")
                                    //exit()
                                    sleep(300)
                                    知聊返回()
                                    知聊返回()
                                    知聊返回()
                                    sleep(500)
                                    ladd = 1///相当于Goto
                                    break
                                }
                            }
                            if (ladd == 0) {
                                log("发信息3")
                                知聊发消息()
                            }
                        }
                    }

                    toastLog("一次")
                } else {
                    toastLog("异常跳出男粉下面打招呼界面")
                }
            }
            sleep(200)
            知聊自动接听()
            toastLog("滑动")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(500)
            if (textContains("加载完成").findOnce()) {
                sleep(1000)
                swipe(x / 2, y * 0.7, x / 2, 0, 500)
                sleep(500)
            }
            if (storage.get("jishihuif", true)) {
                知聊回信息()
            }

        } else {
            toastLog("没找到男粉下面打招呼图标")
            知聊返回()
        }
    }


}
function 知聊新人() {
    if (storage.get("jishihuif", true)) {
        知聊回信息()
    }
    var node = id("fl_main_menu_provide").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    置顶()
    知聊自动接听()
    var node = text("聊场").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    node = text("新人").findOnce()
    if (node) {
        sleep(500)
        toastLog("新人")
        点击(node)
        sleep(1000)
    }
    node = id("ivProvideFilter").findOnce()
    if (node) {
        sleep(500)
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("男").findOne(1500) || text("小哥哥").findOnce()
    if (node) {
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    node = text("确定").findOnce() || text("选好了").findOnce()
    if (node) {
        toastLog("筛选")
        点击(node)
        sleep(1000)
    }
    知聊刷新()
    sleep(2000)
    for (let i = 0; i < 15; i++) {
        var nodes = id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).find()//找到本页所有的头像
        toastLog(nodes.size())
        if (!nodes.empty()) {//如果本页头像存在
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]//循环遍历每一个头像//nodes是一个数组//node是每一个头像的节点
                if (id("fl_provide_card_root").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()) {//如果在头像页面
                    sleep(500)
                    node.click()
                    //点击(node)//点击每次遍历的那一个头像
                    sleep(1000)
                    知聊自动接听()
                    var nodd = id("fl_provide_card_root").findOnce()
                    if (nodd) {
                        toastLog("...")
                    } else {
                        sleep(1000)
                        知聊消息点击()
                        sleep(300)
                        var node3 = id("tvHeadTitle").findOnce()//定义昵称
                        var 昵称 = ""
                        if (node3) {
                            昵称 = node3.getText() + ""//获取到昵称名字
                            log(nameArr)
                            log(昵称)
                            var ladd = 0
                            for (let i = 0; i < nameArr.length; i++) {
                                if (昵称.indexOf(nameArr[i]) > -1) {
                                    toastLog("设置了老客户不发")
                                    //exit()
                                    sleep(300)
                                    知聊返回()
                                    知聊返回()
                                    知聊返回()
                                    sleep(500)
                                    ladd = 1///相当于Goto
                                    break
                                }
                            }
                            if (ladd == 0) {
                                log("发信息3")
                                知聊发消息()
                            }
                        }
                    }
                    知聊自动接听()
                    toastLog("一次")
                } else {
                    toastLog("异常跳出男粉下面打招呼界面")
                }
            }
            sleep(200)
            toastLog("滑动")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(500)
            if (textContains("加载完成").findOnce()) {
                sleep(1000)
                swipe(x / 2, y * 0.7, x / 2, 0, 500)
                sleep(500)
            }
            if (storage.get("jishihuif", true)) {
                知聊回信息()
            }
            知聊自动接听()
        } else {
            toastLog("没找到男粉下面打招呼图标")
        }
    }
    知聊返回()

}
function 知聊抢聊() {
    知聊返回()
    var node = id("fl_main_menu_provide").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    置顶()
    知聊自动接听()
    var node = text("抢聊").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    while (true) {
        if (id("iv_grab_chat_standard").findOnce()) {
            var node = text("50聊币/分钟").findOnce()
            if (node) {
                log("抢到")
                点击(node)
                //node.click()
            }
            知聊自动接听()

        } else {
            break
        }
    }

}
function 知聊消息点击() {
    sleep(1200)
    var node = id("iv_home_notice").findOnce() || text("私信聊").findOnce() || id("fl_home_notice").findOnce() || id("ll_bottom_right_btn_msg").findOnce() || id("ll_home_main_layout").findOnce()
    if (node) {
        toastLog("点击聊天")
        sleep(200)
        点击(node)
        node.click()
        sleep(2500)

    }

}

function 知聊客服返回() {
    var node = text("平台小秘书").findOnce() || id("faq_img").findOnce()
    if (node) {
        toastLog("是客服")
        知聊返回()
        知聊返回()
    }
}

function 知聊刷新() {
    for (let aa = 0; aa < 3; aa++) {
        if (text("活跃").findOnce() || text("交友").findOnce()) {
            swipe(x / 2, y * 0.3, x / 2, y, 10)
            sleep(500)
        }
    }
    for (var nn = 0; nn < 2; nn++) {
        if (text("活跃").findOnce() || text("交友").findOnce()) {
            swipe(x / 2, y * 0.3, x / 2, y, 500)
            log("滑动刷新")
            sleep(2000)
        }
    }
    toastLog("刷新完成")
}
function 知聊发消息() {
    var node = id("etInput").findOnce()//输入框
    if (node) {
        var 头像nodes = id("ivUserIcon").find()
        var 消息nodes = id("tvBodyText").find()
        if (!头像nodes.empty() && !消息nodes.empty()) {// 
            var 头像len = 头像nodes.size()
            var 消息len = 消息nodes.size()
            if (头像nodes[头像len - 1].bounds().centerX() < x / 2) {

                log("回复内置")
                var wenTi = 消息nodes[消息len - 1].getText() + ""
                log(wenTi)
                let 答案 = 找话术(wenTi)
                if (答案) {
                    console.log(答案);
                } else {
                    alert("获取话术失败,是正版重启一下软件就可以");
                    exit()
                }
                //得到答案数组(很多个答案)
                知聊客服返回()
                //点击(node)
                sleep(500)
                知聊自动接听()
                node.setText(答案)

                //随机输入数组中��其中一个答案
                sleep(500)
                node = text("发送").findOnce()
                if (node) {
                    sleep(500)
                    点击(node)
                    node.click()
                    sleep(1000)
                    if (node = text("取消").findOnce()) {
                        点击(node)
                        sleep(sendTime)
                    }
                    toastLog("发送等待")

                }
                知聊返回()
                知聊返回()
                知聊返回()


                //-----------------------------------我们发的-----------------------------------------
            } else {
                if (头像len < sendStrip) {
                    知聊客服返回()
                    //点击(node)
                    知聊自动接听()
                    sleep(500)
                    node.setText(随机消息(sayHiArr))
                    sleep(500)
                    node = text("发送").findOnce()
                    if (node) {
                        sleep(500)
                        点击(node)
                        node.click()
                        sleep(sendTime)
                        if (node = text("取消").findOnce()) {
                            点击(node)
                            sleep(1000)
                        }
                        toastLog("发送等待")
                    }
                }
                知聊返回()
                知聊返回()
                知聊返回()

            }
        } else {//一片空白
            知聊客服返回()
            //点击(node)
            知聊自动接听()
            sleep(500)
            node.setText(随机消息(sayHiArr))
            sleep(500)
            node = text("发送").findOnce()
            if (node) {
                sleep(500)
                点击(node)
                node.click()
                sleep(sendTime)
                if (node = text("取消").findOnce()) {
                    点击(node)
                    sleep(1000)
                }
                toastLog("发送等待")
            }
            知聊返回()
            知聊返回()
            知聊返回()
        }
    } else {
        toastLog("没找到输入框")
    }
}
function 知聊VIP() {

    var node = id("fl_main_menu_notice").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击首页")
        点击(node)
        sleep(1000)
    }
    知聊自动接听()
    var node = id("iv_contact_list").findOne(1000)
    if (node) {
        sleep(500)
        toastLog("点击聊场")
        点击(node)
        sleep(1000)
    }
    node = id("iv_right_icon").findOnce()
    if (node) {
        sleep(500)
        toastLog("查找")
        点击(node)
        sleep(1000)
    }
    node = text("男").findOne(1500) || text("小哥哥").findOnce()
    if (node) {
        sleep(500)
        toastLog("筛选")
        点击(node)
        sleep(1000)
        点击(text("开始搜索").id("tvDiscoverSearch").findOnce())
        sleep(1000)
    }
    sleep(1000)
    for (let i = 0; i < 2; i++) {
        var nodes = id("tvPersonListNickname").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).find()//找到本页所有的头像
        toastLog(nodes.size())
        if (!nodes.empty()) {//如果本页头像存在
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]//循环遍历每一个头像//nodes是一个数组//node是每一个头像的节点
                if (id("tvPersonListNickname").boundsInside(1, 274 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()) {//如果在头像页面
                    sleep(500)
                    //node.click()
                    点击(node)//点击每次遍历的那一个头像
                    sleep(1000)
                    知聊自动接听()
                    var nodd = id("tvPersonListNickname").findOnce()
                    if (nodd) {
                        toastLog("...")
                    } else {
                        sleep(1000)
                        知聊消息点击()
                        sleep(300)
                        var node3 = id("tvHeadTitle").findOnce()//定义昵称
                        var 昵称 = ""
                        if (node3) {
                            昵称 = node3.getText() + ""//获取到昵称名字
                            log(nameArr)
                            log(昵称)
                            var ladd = 0
                            for (let i = 0; i < nameArr.length; i++) {
                                if (昵称.indexOf(nameArr[i]) > -1) {
                                    toastLog("设置了老客户不发")
                                    //exit()
                                    sleep(300)
                                    知聊返回()
                                    知聊返回()
                                    知聊返回()
                                    sleep(500)
                                    ladd = 1///相当于Goto
                                    break
                                }
                            }
                            if (ladd == 0) {
                                log("发信息3")
                                知聊发消息()
                            }
                        }

                    }

                    toastLog("一次")
                } else {
                    toastLog("异常跳出男粉下面打招呼界面")
                }
            }
            sleep(200)
            toastLog("滑动")
            swipe(x / 2, y * 0.7, x / 2, 0, 500)
            sleep(500)
            知聊自动接听()
            if (textContains("加载完成").findOnce()) {
                sleep(1000)
                swipe(x / 2, y * 0.7, x / 2, 0, 500)
                sleep(500)
            }


        } else {
            toastLog("没找到男粉下面打招呼图标")
        }
    }
    知聊返回2()
    知聊返回2()
    知聊返回2()
    知聊返回2()
    if (storage.get("jishihuif", true)) {
        知聊回信息()
    }
    知聊返回()
    知聊自动接听()
}


function 知聊返回() {
    let ress_jsons = res.body.json()
    if (ress_jsons.msg === "验证通过") {
        if (id("etInput").findOnce() || id("iv_home_close").findOnce() || id("faq_img").findOnce() || id("fl_home_close").findOnce() || id("iv_back").findOnce() || text("评价").findOnce() || textContains("通话结束").findOnce() || text("提醒").visibleToUser().findOnce() || text("我的资料").findOnce()) {
            toastLog("返回")
            back()
            sleep(1000)
        }
    } else {
        console.info("知聊返回");
        console.error("...")
    }

}
function 知聊返回2() {
    if (id("ivDiscoverSearchResultsBack").findOnce() || id("iv_home_close").findOnce() || id("iv_back").findOnce() || id("faq_img").findOnce() || text("取消").findOnce() || text("关系").findOnce() || id("fl_home_close").findOnce() || textContains("通话结束").findOnce()) {
        toastLog("返回")
        back()
        sleep(1000)
    }
}


function 知聊回信息() {
    log("回信息")
    //var node = id("red_count_tv").findOnce()
    var node = id("tv_main_menu_notice_red_dot").findOnce()
    if (node) {
        toastLog("回复消息")
        let xx = id("fl_main_menu_notice").findOnce()
        if (xx) {
            点击(xx)
            xx.click()
        }
        sleep(1500)
        知聊上滑回信息()
    } else {
        toastLog("没有信息需要回复")
    }
}

function 知聊上滑回信息() {
    for (let i = 0; i < 10; i++) {
        sleep(100)
        var nodes = id("tvUnread").visibleToUser().find()
        toastLog(nodes.size())
        if (!nodes.empty()) {
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]
                if (id("tvUnread").visibleToUser().findOnce()) {
                    sleep(100)
                    点击(node)
                    toastLog("点击红点")
                    sleep(2000)
                    sleep(300)
                    if (id("tvNavTitle").textContains("团队").findOnce() || text("谁看过我").findOnce() && idContains("Back").findOnce()) {
                        back()
                        sleep(1000)
                    }
                    未回复的()
                    知聊发消息()
                }
            }
        } else {
            toastLog("本页已经没有信息需要回复")
        }
        if (i < 9 && text("消息").id("item_navigator_text").findOnce()) {// && id("red_count_tv").findOnce()
            var 昵称1 = ""
            var 昵称2 = ""
            var node = id("tvNickname").boundsInside(1, 230 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()
            if (node) {
                昵称1 = node.getText()
            }
            sleep(500)
            toastLog("滑动找")
            swipe(x / 2, y * 0.75, x / 2, 200, 1000)
            sleep(500)
            node = id("tvNickname").boundsInside(1, 230 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()
            if (node) {
                昵称2 = node.getText()
            }
            if (昵称1 == 昵称2) {
                toastLog("没人了")
                break
            }
            if (!id("tv_main_menu_notice_red_dot").findOnce()) {
                break;
            }
        }
    }
    for (let ii = 0; ii < 10; ii++) {
        if (text("消息").id("item_navigator_text").findOnce()) {
            var 昵称1 = ""
            var 昵称2 = ""
            var node = id("tvNickname").boundsInside(1, 230 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()
            if (node) {
                昵称1 = node.getText()
            }
            toastLog("向下滑动")
            swipe(x / 2, y * 0.4, x / 2, y, 10)
            sleep(500)
            swipe(x / 2, y * 0.4, x / 2, y, 300)
            sleep(500)
            node = id("tvNickname").boundsInside(1, 230 / 1920 * y, x - 1, 1635 / 1920 * y).findOnce()
            if (node) {
                昵称2 = node.getText()
            }
            if (昵称1 == 昵称2) {
                toastLog("没人了")
                break
            }
            下滑回复()
        }
    }

    var node = id("fl_main_menu_provide").findOnce()
    if (node) {
        toastLog("点击首页")
        sleep(200)
        点击(node)
        sleep(1000)
    }

}
function 下滑回复() {
    var nodes = id("tvUnread").visibleToUser().find()
    toastLog(nodes.size())
    if (!nodes.empty()) {
        for (let n = 0; n < nodes.size(); n++) {
            node = nodes[n]
            if (id("tvUnread").visibleToUser().findOnce()) {
                sleep(100)
                点击(node)
                toastLog("点击红点")
                sleep(2000)
                sleep(300)
                if (id("tvNavTitle").textContains("团队").findOnce() || text("谁看过我").findOnce() && idContains("Back").findOnce()) {
                    back()
                    sleep(1000)
                }
                未回复的()
                知聊发消息()
            }
        }
    } else {
        toastLog("本页已经没有信息需要回复")
    }
}
function 未回复的() {
    let wei = text("打招呼的人").findOnce()
    if (wei) {
        toastLog("未回复的人")
        var nodes = id("tvNickname").visibleToUser().find()
        toastLog(nodes.size())
        if (!nodes.empty()) {
            for (let n = 0; n < nodes.size(); n++) {
                node = nodes[n]
                if (id("tvNickname").visibleToUser().findOnce()) {
                    sleep(100)
                    点击(node)
                    sleep(1000)
                    知聊消息点击()
                    sleep(1000)
                    var node3 = id("tvHeadTitle").findOnce()//定义昵称
                    var 昵称 = ""
                    if (node3) {
                        昵称 = node3.getText() + ""//获取到昵称名字
                        log(nameArr)
                        log(昵称)
                        var ladd = 0
                        for (let i = 0; i < nameArr.length; i++) {
                            if (昵称.indexOf(nameArr[i]) > -1) {
                                toastLog("设置了老客户不发")
                                //exit()
                                sleep(300)
                                知聊返回()
                                知聊返回()
                                知聊返回()
                                sleep(500)
                                ladd = 1///相当于Goto
                                break
                            }
                        }
                        if (ladd == 0) {
                            log("发信息3")
                            知聊发消息()
                        }
                    }
                }
            }
        } else {
            toastLog("没有可回复信息")
        }
        if (text("打招呼的人").findOnce()) {
            toastLog("返回")
            back()
            sleep(1000)
        }
    }
}
function 知聊红点点击(节点) {
    var nodex = 节点.bounds().centerX()
    var nodey = 节点.bounds().centerY()
    if (nodex > 0 && nodey > 0) {
        click(nodex, nodey)
    }
}






















//=================================================必用函数=======================================================

function SendHeartbeat() {
    var oTime = 0;//初始化次数
    var CDK = storage.get("CDK");
    var cdkNeedle = storage.get("oldNeedle");
    //标记6
    do {
        toastLog("心跳验证中");
        var heartbeatResult = SendQLRequest(
            "apiv3/card_ping",
            "card=" + CDK + "&software=" + MISdasgsgd + "&needle=" + cdkNeedle
        );
        //log("cdkNeedle:" + cdkNeedle)
        if (heartbeatResult[0]) {//验证成功
            oTime = 0//重置失败次数
            // var successData = heartbeatResult[1];
            // var endTime = successData["endtime"];
            // var lessTime = successData["less_time"];
            //log("卡密剩余时间" + lessTime);
            sleep(40000); //休息40s
        } else {
            var failResult = heartbeatResult[1];
            console.error("cdk心跳失败,失败信息:" + failResult + "正在重试(3次)");
            oTime++;
            if (oTime >= 3) {

                alert("心跳异常次数3次,结束程序");
                console.error("心跳异常次数3次,结束程序")
                exit()
            }
            sleep(20000); //休息20s重试
        }
        //标记7
        //标记7
    } while (true);
}

/**
 * 访问权朗api
 * @param {string}} api
 * @param {string} apiParams
 */
function SendQLRequest(api, apiParams) {
    var qlHostArray = [
        //"http://119.23.218.157/"
        //"http://119.23.218.157/"
    ];
    var connectTimes = 0;
    while (true) {
        try {
            var recode_taobao = http.get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp")

            if (recode_taobao.statusCode >= 200 && recode_taobao.statusCode < 300) {
                //log("页面获取成功!")
                var taobaotime = recode_taobao.body.json();
                if (taobaotime != null) {
                    break;
                }
            } else if (recode_taobaos.statusCode == 404) {
                toastLog("页面没找到哦...");
            } else {
                toastLog("错误: " + recode_taobao.statusCode + " " + recode_taobao.statusMessage);
            }

        } catch (e) { console.error("链接淘宝时间戳,出现网络异常\n"); sleep(5000) }
    }

    var timeStamp = taobaotime.data.t.substring(0, 10);
    // log("timeStamp" + timeStamp);
    var sign = HexMd5(UEKSmksaa + "" + timeStamp);
    var common_params =
        "center_id=" + moosgsuKL + "&timestamp=" + timeStamp + "&sign=" + sign;
    connectTimes = 0;
    var qlResult = "";

    do {
        connectTimes = connectTimes + 1;
        var api_list = ['http://api3.2cccc.cc/'];
        let urlurl = api_list[random(0, api_list.length - 1)]
        qlResult = http
            .get(////"http://119.23.218.157/"
                urlurl +
                api +
                "?" +
                common_params +
                "&" +
                apiParams
            )
            .body.string();

        if (connectTimes > 10) {
            return [false, "权朗回执超时"];
        }
    } while (qlResult.substring(2, 6) != "code");

    qlResult = JSON.parse(qlResult);

    if (qlResult["code"] == "1") {
        if (
            HexMd5(qlResult["timestamp"] + UEKSmksaa).toUpperCase() ==
            qlResult["sign"].toUpperCase() &&
            Math.abs(timeStamp - qlResult["timestamp"]) < 700
        ) {
            return [true, qlResult["data"]];
        } else {
            return [false, "请检查API密码是否填写正确"];
        }
    } else {
        return [false, qlResult["msg"]];
    }
}



//-------MD5---------------------
//(autojs 调用java 的MD5方法有bug, 生成出来的是错误的结果.所以用 下面的js md5)
/**
 * 16进制MD5(常用)
 * @param {any} s
 */
function HexMd5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
}
function B64Md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz));
}
function StrMd5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
}
function HexHmacMd5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
}
function B64HmacMd5(key, data) {
    return binl2b64(core_hmac_md5(key, data));
}
function StrHmacMd5(key, data) {
    return binl2str(core_hmac_md5(key, data));
}

var hexcase = 0;
var b64pad = "";
var chrsz = 8;
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}
function core_md5(x, len) {
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
}
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}
function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
    var ipad = Array(16),
        opad = Array(16);
    for (var i = 0; i < 16; i++) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128);
}
function safe_add(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
}
function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
    return bin;
}
function binl2str(bin) {
    var str = "";
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
        str += String.fromCharCode((bin[i >> 5] >>> i % 32) & mask);
    return str;
}
function binl2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
        str +=
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
            hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
    }
    return str;
}
function binl2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i += 3) {
        var triplet =
            (((binarray[i >> 2] >> (8 * (i % 4))) & 0xff) << 16) |
            (((binarray[(i + 1) >> 2] >> (8 * ((i + 1) % 4))) & 0xff) << 8) |
            ((binarray[(i + 2) >> 2] >> (8 * ((i + 2) % 4))) & 0xff);
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
            else str += tab.charAt((triplet >> (6 * (3 - j))) & 0x3f);
        }
    }
    return str;
}


function 日志显示() {
    window日志 = floaty.rawWindow(
        '<vertical id="win" gravity="center" visibility="visible" bg="#60000000" >\
            <console id="console" h="*" />\
        </vertical  >'
    );
    ui.run(() => {
        window日志.console.setConsole(runtime.console);
        window日志.console.setColor("D", "#ff64dd17");
        window日志.console.setInputEnabled(false);

    });
    window日志.setPosition(0, y * 0.7);
    window日志.setSize(x, y * 0.2)
    window日志.setTouchable(false);
}



function 幕布() {
    window幕布 = floaty.rawWindow(
        '<vertical id="win" gravity="center" visibility="visible" bg="#00008B" >\
            <horizontal gravity="centered" bg="#CD950C">\
             <text text="为您遮挡对方视频的功能" padding="8 8 8 8" textSize="25sp"/>\
            </horizontal>\
            <console id="console" h="*" />\
        </vertical  >'
    );
    window幕布.setPosition(x * 0.085, 0);
    window幕布.setSize(x * 1.4, y * 0.5)
    window幕布.setTouchable(false);
}
function 悬浮窗() {
    var 初始状态 = 0
    var 日志状态 = 1
    var 幕布状态 = 0
    let view1 = '<vertical>\
    <img id="move" w="30" h="40" tint="#FFFAFA" bg="#000000" src="ic_open_with_black_48dp"/>\
    <img id="start" w="30" h="40" tint="#DC143C" bg="#1E90FF" src="ic_play_circle_outline_black_48dp" />\
    <img id="riZhi" w="30" h="40" tint="#000000" bg="#D2B48C" src="ic_visibility_off_black_48dp" />\
    <img id="mobu" w="30" h="40" tint="#000000" bg="#9B30FF" src="ic_visibility_off_black_48dp" />\
    <img id="exit" w="30" h="40" tint="#008000" bg="#FF8C00" src="ic_home_black_48dp" />\
    </vertical>'
    //<img id="riZhi" w="20" h="20" tint="#000000" bg="#D2B48C" src="ic_visibility_off_black_48dp" />\
    window = floaty.window(view1);
    setInterval(() => { }, 2000);

    window.setPosition(0, y * 0.2);
    //window.setSize(300, 200);
    var wx = 0, wy = 0;
    var windowX, windowY;
    window.move.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                wx = event.getRawX();
                wy = event.getRawY();
                windowX = window.getX();
                windowY = window.getY();
                return true;
            case event.ACTION_MOVE:
                window.setPosition(windowX + (event.getRawX() - wx),
                    windowY + (event.getRawY() - wy));
                return true;
        }
        return true;
    });
    window.start.click(() => {
        console.info("点击了开始")
        if (初始状态 != 0) {
            初始状态 = 0
            window.start.attr("src", "ic_play_circle_outline_black_48dp");
            console.info("暂停")
            try { 主程序线程.interrupt() } catch (e) { log("这就开始") };
        } else {
            初始状态 = 1
            window.start.attr("src", "ic_pause_circle_outline_black_48dp");
            toastLog("开始")
            app记录 = storage.get("app", "未选择")
            storage.put(app记录 + "子选项", storage.get("app子选项", 0))
            主程序线程 = threads.start(主程序)
        };
    })

    window.exit.click(() => {
        home();//标记3)
    })

    window.riZhi.click(function () {
        if (日志状态 == 1) {
            日志状态 = 0
            window.riZhi.attr("src", "ic_visibility_black_48dp")
            window日志.close()
        } else {
            日志状态 = 1
            window.riZhi.attr("src", "ic_visibility_off_black_48dp")
            threads.start(日志显示)
        }
    })
    window.mobu.click(function () {
        if (幕布状态 == 1) {
            幕布状态 = 0
            window.mobu.attr("src", "ic_visibility_black_48dp")
            console.info("关闭幕布")
            toastLog("关闭幕布")
            window幕布.close()
        } else {
            幕布状态 = 1
            window.mobu.attr("src", "ic_visibility_off_black_48dp")
            console.info("开启幕布")
            toastLog("开启幕布")
            threads.start(幕布)
        }
    })
    if (!storage.get("日志状态", true)) {
        日志状态 = 0
        window.riZhi.attr("src", "ic_visibility_black_48dp")
        window日志.close()
    }
    if (!storage.get("幕布状态", true)) {
        幕布状态 = 0
        window.mobu.attr("src", "ic_visibility_black_48dp")
        window幕布.close()
    }
};

function 数组转字典(数组) {
    var dic = {}
    for (let i = 0; i < 数组.length; i++) {
        let 临时数组 = 数组[i].split(":")
        dic[临时数组[0]] = 临时数组[1]
    }
    return (dic)
}


function 点击(节点) {
    var nodex = 节点.bounds().centerX()
    var nodey = 节点.bounds().centerY()
    if (nodex > 0 && nodey > 0) {
        click(nodex, nodey)
    }
}


function 随机消息(arr) {
    return (arr[Math.floor(Math.random() * arr.length)])
}


function 消息红点点击(节点) {
    var nodex = 节点.bounds().centerX()
    var nodey = 节点.bounds().centerY()
    if (nodex > 0 && nodey > 0) {
        click(nodex - 60, nodey)
    }
}
//============================================必用函数=============================================






function CDKLogin() {

    var logoutResult = LogoutNeedle();
    console.log("退出登陆" + logoutResult[1]);
    var CDK = storage.get("CDK");
    var loginResult = SendQLRequest(
        "apiv3/card_login",
        "card=" + CDK + "&software=" + MISdasgsgd
    );
    if (loginResult[0]) {
        var successData = loginResult[1];
        // var endTime = successData["endtime"];
        // var lessTime = successData["less_time"];
        var needle = successData["needle"];
        PutSt("oldNeedle", needle); //存储本次 的Needle
        console.log(needle + "登陆成功");
        threads.start(function () {
            SendHeartbeat(needle);
        });
        // return [true, needle, lessTime];
    } else {
        var failResult = loginResult[1];
        alert("卡密验证失败:" + failResult)
        exit()
        // return [false, failResult];
    }
}

/**
 * 退出上一次的Needle
 */
function LogoutNeedle() {
    var CDK = storage.get("CDK", "");
    var oldNeedle = GetSt("oldNeedle", "");
    if (oldNeedle != "") {
        // PutSt("oldNeedle", false); //存储本次 的Needle
        var logoutResult = SendQLRequest(
            "apiv3/card_logout",
            "card=" + CDK + "&needle=" + oldNeedle
        );
        if (logoutResult[0]) {
            return [true, oldNeedle + " 退出成功!"];
        } else {
            return [false, oldNeedle + " 退出失败!"];
        }
    } else {
        return [true, "上次无存储的Needle"];
    }
}



function IsNotNullOrEmpty(content) {
    return (
        content != null &&
        content != undefined &&
        content != "" &&
        content != " " &&
        content != "  "
    );
}

/**
 * 存储空间 存入 键值数据
 * @param {string} key 键名
 * @param {any} value 值
 */
function PutSt(key, value) {
    //   cw(key + " : " + value);
    if (IsNotNullOrEmpty(value)) {
        storage.put(key, value);
    } else {
        //cw("key:" + key + "----> value为空,跳过保存");
    }
}

/**
 * 获取 存储控件中的 数据
 * @param {string} key 键名
 * @param {any} defaultValue 默认值
 */
function GetSt(key, defaultValue) {
    var data = storage.get(key);
    // cw(key + " : " + data);
    if (IsNotNullOrEmpty(data)) {
        return data;
    } else {
        if (defaultValue == undefined) {
            defaultValue = "";
        }
        //cw(key + " : 返回默认值->>" + defaultValue);
        return defaultValue;
    }
}





//=================================================后加必用函数============================================


function 找话术(问题) {
    while (true) {
        try {
            let res = http.post("http://" + urlapi + "/indexHuaShu/device", { wenTi: 问题 })
            if (res.statusCode == 200) {
                log("匹配话术成功");
                let huaShu = res.body.json().huaShu
                if (huaShu) {
                    return huaShu
                } else {
                    log("未获取到话术1s后重试");
                }
            } else {
                alert("获取话术失败,是正版重启一下软件就可以");
                sleep(4000)
            }
        } catch (e) {
            alert("获取话术失败,是正版重启一下软件就可以");
            sleep(4000)
        }
        sleep(1000)
    }
}



//结束1
