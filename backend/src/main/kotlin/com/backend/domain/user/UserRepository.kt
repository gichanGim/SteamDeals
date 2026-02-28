package com.backend.domain.user

import com.backend.domain.game.Game
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Long>{
    fun findByProviderAndProviderId(provider: String, providerId: String): User?
}