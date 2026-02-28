package com.backend.infra.steam

import com.backend.config.ApiExecutor
import com.backend.domain.game.Game
import com.backend.domain.game.GameRepository
import com.backend.infra.steam.dto.response.SteamApp
import com.backend.infra.steam.dto.response.SteamAppListResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class SteamService(
    @Value("\${steam.api-key}")
    private val apiKey: String,
    private val apiExecutor: ApiExecutor,
    private var gameRepository: GameRepository
) {
    fun updateSteamGames() {
        val games = gameRepository.findAll().associateBy { it.appId };  // 읽기 작업 한번에 가져오기

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

            if (appList == null)
                break;

            for (app in appList){
                if (!games.containsKey(app.appid))
                    gameRepository.save(Game.create(app));  // 데이터베이스에 없는 게임이면 새로 생성
                else{

                }
            }

            // API 서버 부하 방지를 위한 아주 짧은 휴식
            Thread.sleep(100)
        }
    }
}