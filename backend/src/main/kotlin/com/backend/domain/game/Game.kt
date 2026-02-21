package com.backend.domain.game

import jakarta.persistence.*
@Entity
@Table(name = "games")
class Game(
    @Id @Column(name = "app_id") val appId: Long,
    var name: String,

) {
    companion object {
        fun create(appId: Long, name: String): Game {
            return Game(appId = appId, name = name)
        }
    }
}