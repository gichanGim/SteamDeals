package com.backend.infra.steam

import com.fasterxml.jackson.annotation.JsonProperty

data class SteamGameResponse(
    val appid: Long,
    val name: String
)

data class SteamAppListResponse(
    val apps: List<SteamGameResponse>,
    @JsonProperty("have_more_results") val haveMoreResults: Boolean = false,
    @JsonProperty("last_appid") val lastAppid: Long = 0
)

data class SteamApiResponse(
    val response: SteamAppListResponse
)
