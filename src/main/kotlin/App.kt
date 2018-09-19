package app

import app.info.InfoGenerator
import kotlin.browser.document

external fun require(module: String): dynamic

public class KotlinName(val firstname: String, val lastname: String) {
    val fullname: String
        get() = "${firstname}-${lastname}..:"
}

//fun main(args: Array<String>) {
//    require("../asset/css/app.css")
//
//    val env = js("process.env.NODE_ENV")
//    console.log("env1: $env")
//
//    val infoElement = InfoGenerator.create(env == "development")
//    document.body?.appendChild(infoElement)
//}
