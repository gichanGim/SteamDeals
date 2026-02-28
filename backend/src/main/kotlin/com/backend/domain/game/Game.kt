package com.backend.domain.game

import com.backend.infra.steam.dto.response.SteamApp
import jakarta.persistence.*
import tools.jackson.databind.type.LogicalType

@Entity
@Table(name = "games")
class Game(
    @Id @Column(name = "app_id")
    val appId: Long,

    var name: String,

    @Column(name = "last_modified")
    var lastModified: Long,

    @Column(name = "price_change_number")
    var priceChangeNumber: Long
) {
    fun update(app: SteamApp) {
        name = app.name
        lastModified = app.lastModified
        priceChangeNumber = app.priceChangeNumber
    }

    companion object {
        fun create(app: SteamApp): Game {
            return Game(appId = app.appid, name = app.name, lastModified = app.lastModified, priceChangeNumber = app.priceChangeNumber)
        }
    }
}