package com.dangraham23.server.responses;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetEventsResponse {
    private Integer id;
    private String title;
    private Date startDate;
    private Date endDate;
    private String description;
    private Integer host_id;
    private Integer guest_id;
    private String host_email;
    private String guest_email;
}
