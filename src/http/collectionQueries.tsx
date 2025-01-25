import { CollectionType } from "@/utils/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API1AddCollection, API1GetCollections } from ".";

export const useGetCollections = () => {
	return useQuery<
		{
			status: boolean;
			message: string;
			data: CollectionType[];
		},
		Error
	>({
		queryKey: ["collections"],
		queryFn: API1GetCollections,
	});
};

export const useAddCollections = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: API1AddCollection,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["collections"] });
		},
	});
};

// export const useGetAuditLogs = (params: AuditLogsQueryParamsType) => {
// 	return useQuery<GetAuditLogsResponseType, Error>({
// 		queryKey: ["audit-logs", params],
// 		queryFn: () => APIVersion2GetAuditLogs(params),
// 	});
// };
