package com.dangraham23.server.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetFriendResponse {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Long phoneNumber;
}
