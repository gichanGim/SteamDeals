package com.backend.infra.steam

import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class SteamService {
    private val webClient = WebClient.create()
    private val API_KEY = "934EBC97703866610810B89F26E71F1D"
    private val BASE_URL = "http://api.steampowered.com/IStoreService/GetAppList/v1/"

    fun getSteamGames(): List<SteamGameResponse> {
        val list = mutableListOf<SteamGameResponse>()
        var lastAppid = 0L
        var haveMoreResults = true

        while (haveMoreResults) {
            val response = webClient.get()
                .uri("$BASE_URL?key=$API_KEY&max_results=500&last_appid=$lastAppid")
                .retrieve()
                .bodyToMono(SteamApiResponse::class.java)
                .block() ?: break

            list.addAll(response.response.apps)
            haveMoreResults = response.response.haveMoreResults
            lastAppid = response.response.lastAppid
        }

        return list
    }
}