package com.backend.infra.steam.dto.response

import com.fasterxml.jackson.annotation.JsonProperty

data class SteamApp(
    val appid: Int,
    val name: String,
    @JsonProperty("last_modified")
    val lastModified: Long,
    @JsonProperty("price_change_number")
    val priceChangeNumber: Long
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