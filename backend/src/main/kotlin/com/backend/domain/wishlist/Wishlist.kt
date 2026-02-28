package com.backend.domain.wishlist

import com.backend.domain.game.Game
import com.backend.domain.user.User
import jakarta.persistence.*

@Entity
@Table(name = "wishlists")
class Wishlist(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wishlist_id")
    var id: Long? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "app_id")
    val game: Game
) {
}