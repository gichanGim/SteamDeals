package com.backend.domain.auth.dto.response

data class OAuthLoginResponse(
    val provider: String,
    val providerId: String,
    val registered: Boolean
)
