package com.backend.domain.user

import com.backend.domain.auth.OAuthInfo
import com.backend.domain.game.Game
import com.backend.infra.steam.dto.response.SteamApp
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "users")
class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    var id: Long,

    @Column(nullable = false)
    var provider: String,

    @Column(name = "provider_id", nullable = false)
    var providerId: String
) {
    companion object {
        fun create(provier: String, oAuthInfo: OAuthInfo): Game {
            return User()
        }
    }
}