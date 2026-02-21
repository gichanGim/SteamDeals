package com.backend.infra.steam

import com.backend.config.ApiExecutor
import com.backend.infra.steam.dto.response.SteamApp
import com.backend.infra.steam.dto.response.SteamAppListResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class SteamService(
    @Value("\${steam.api-key}")
    private val apiKey: String,
    private val apiExecutor: ApiExecutor
) {
    fun updateSteamGames() {
        var lastAppid: Long? = 0L
        var haveMoreResults : Boolean = true

        while (haveMoreResults) {
            val result = apiExecutor.get(
                "http://api.steampowered.com/IStoreService/GetAppList/v1/?key=$apiKey&max_results=500&last_appid=$lastAppid",
                SteamAppListResponse::class.java
            );

            val appList = result?.response?.apps;
            lastAppid = result?.response?.lastAppid;
            haveMoreResults = result?.response?.haveMoreResults == true;

            // API 서버 부하 방지를 위한 아주 짧은 휴식
            Thread.sleep(100)
        }
    }

    private fun saveToDatabase(apps: List<SteamApp>) {
        // 여기에 아까 만든 JdbcTemplate이나 JPA를 이용한 Batch Insert 로직을 넣으세요.
        println("${apps.size}개의 게임 처리 중... 마지막 ID: ${apps.lastOrNull()?.appid}")
    }
}