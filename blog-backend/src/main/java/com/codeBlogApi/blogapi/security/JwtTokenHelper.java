//package com.codeBlogApi.blogapi.security;
//
//import io.jsonwebtoken.Claims;
//
//
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Component;
//import io.jsonwebtoken.Jwts;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.function.Function;
//
//@Component
//public class JwtTokenHelper {
//
//    public static final long JWT_TOKEN_VALIDITY=5*60*60;
//    String secret="jwtTokenKey";
//
//    //retreve useName from jwt token
//
//    public String getUsernameFromToken(String token)
//    {
//            return  getClaimFromToken(token, Claims::getSubject);
//
//
//    }
//
//    //retrive expiration from token
//    public Date getExpirationDateFromToken(String token)
//    {
//
//        return  getClaimFromToken(token, Claims::getExpiration);
//    }
//
//    public <T> T getClaimFromToken(String token, Function<Claims,T>claimsResolver)
//    {
//        final Claims claims=getAllClaimsFromToken(token);
//        return claimsResolver.apply(claims);
//
//    }
//
//    //retrive any info. from token we will need secret key
//
////    Claims getAllClaimsFromToken(String token) {
////        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
////    }
////    Claims getAllClaimsFromToken(String token) {
////        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
////    }
//    Claims getAllClaimsFromToken(String token) {
//        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
//    }
//
//
//
//
//    //check if token has expire
//
//    boolean isTokenExpire(String token)
//    {
//        final Date expiration=getExpirationDateFromToken(token);
//        return  expiration.before(new Date());
//
//    }
//
//    //getenate token from user
//
//    public String generateToken(UserDetails userDetails)
//    {
//        Map<String ,Object>claims=new HashMap<>();
//        return doGenerateToken(claims,userDetails.getUsername());
//    }
//
//    String doGenerateToken(Map<String ,Object>claims,String subject)
//    {
//        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY*100))
//                .signWith(SignatureAlgorithm.HS512,secret).compact();
//
//    }
//
//    //validate token
//    boolean validateToken(String token,UserDetails userDetails)
//    {
//        final String userName=getUsernameFromToken(token);
//        return (userName.equals(userDetails.getUsername()) && !isTokenExpire(token));
//    }
//
//
//}
