package com.backend.infra.steam.dto.response

import com.fasterxml.jackson.annotation.JsonProperty

data class SteamApp(
    val appid: Long,
    val name: String,
    @JsonProperty("last_modified")
    val lastModified: Long = 0,
    @JsonProperty("price_change_number")
    val priceChangeNumber: Long = 0
)

data class SteamAppList(
    val apps: List<SteamApp>,
    @JsonProperty("have_more_results")
    val haveMoreResults: Boolean,
    @JsonProperty("last_appid")
    val lastAppid: Long
)

data class SteamAppListResponse(
    val response: SteamAppList
)