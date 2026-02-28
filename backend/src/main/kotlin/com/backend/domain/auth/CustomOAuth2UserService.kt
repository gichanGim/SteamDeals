package com.backend.domain.auth

import com.backend.domain.auth.dto.response.OAuthLoginResponse
import com.backend.domain.user.User
import com.backend.domain.user.UserRepository
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.stereotype.Service

@Service
class CustomOAuth2UserService(
    private val userRepository: UserRepository
) : DefaultOAuth2UserService() {

     fun oAuthLogin(userRequest: OAuth2UserRequest): OAuthLoginResponse {
        val oAuth2User = super.loadUser(userRequest)
        val provider = userRequest.clientRegistration.registrationId
        val attributes = oAuth2User.attributes

        val providerId = extractOAuthInfo(provider, attributes)

        val user = userRepository.findByProviderAndProviderId(provider, providerId);

        return OAuthLoginResponse(provider, providerId, user != null)
    }

    private fun extractOAuthInfo(provider: String, attributes: Map<String, Any>): String {
        return when (provider) {
            "kakao" -> extractKakao(attributes)
            "naver" -> extractNaver(attributes)
            else -> throw IllegalArgumentException("지원하지 않는 provider: $provider")
        }
    }

    private fun extractKakao(attributes: Map<String, Any>): String {
        return attributes["id"].toString()
    }

    private fun extractNaver(attributes: Map<String, Any>): String {
        val response = attributes["response"] as Map<*, *>

        return response["id"].toString()
    }
}

// OAuth 정보를 담는 DTO
data class OAuthInfo(
    val providerId: String,
    val email: String?,
    val nickname: String?
)